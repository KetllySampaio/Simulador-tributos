import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { TaxCalculatorService } from '../tax-calculator.service';
import { SimplesNacional, TaxResult } from '../../shared/interfaces/tax-calculation.interface';

@Component({
    selector: 'app-simples-nacional',
    templateUrl: './simples-nacional.html',
    styleUrls: ['./simples-nacional.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        NgxMaskDirective
    ]
})
export class SimplesNacionalComponent implements OnInit {
    calculationForm: FormGroup;
    result: TaxResult | null = null;
    loading = false;
    error = '';

    annexTypes = [
        { value: 'I', label: 'Anexo I - Comércio' },
        { value: 'II', label: 'Anexo II - Indústria' },
        { value: 'III', label: 'Anexo III - Serviços' },
        { value: 'IV', label: 'Anexo IV - Serviços' },
        { value: 'V', label: 'Anexo V - Serviços' }
    ];

    constructor(
        private formBuilder: FormBuilder,
        private taxCalculatorService: TaxCalculatorService
    ) {
        this.calculationForm = this.formBuilder.group({
            revenue: ['', [Validators.required, Validators.min(0)]],
            expenses: ['', [Validators.required, Validators.min(0)]],
            period: ['', Validators.required],
            annexType: ['', Validators.required],
            grossRevenueLast12Months: ['', [Validators.required, Validators.min(0)]]
        });
    }

    ngOnInit() {
        // Pode carregar dados iniciais aqui se necessário
    }

    onSubmit() {
        if (this.calculationForm.invalid) {
            return;
        }

        this.loading = true;
        this.error = '';
        
        const calculationData: SimplesNacional = {
            ...this.calculationForm.value
        };

        this.taxCalculatorService.calculateSimplesNacional(calculationData)
            .subscribe({
                next: (result) => {
                    this.result = result;
                    this.loading = false;
                },
                error: (error) => {
                    this.error = 'Erro ao calcular impostos. Por favor, tente novamente.';
                    this.loading = false;
                }
            });
    }

    formatCurrency(value: number): string {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    formatPercentage(value: number): string {
        return (value * 100).toFixed(2) + '%';
    }
}
