import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
    SimplesNacional, 
    LucroPresumido, 
    LucroReal, 
    TaxResult 
} from '../shared/interfaces/tax-calculation.interface';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaxCalculatorService {
    constructor(private http: HttpClient) {}

    calculateSimplesNacional(data: SimplesNacional): Observable<TaxResult> {
        return this.http.post<TaxResult>(`${environment.apiUrl}/calculator/simples-nacional`, data);
    }

    calculateLucroPresumido(data: LucroPresumido): Observable<TaxResult> {
        return this.http.post<TaxResult>(`${environment.apiUrl}/calculator/lucro-presumido`, data);
    }

    calculateLucroReal(data: LucroReal): Observable<TaxResult> {
        return this.http.post<TaxResult>(`${environment.apiUrl}/calculator/lucro-real`, data);
    }

    // Método para obter as tabelas do Simples Nacional
    getSimplesNacionalTables(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/calculator/simples-nacional/tables`);
    }

    // Método para obter as alíquotas do Lucro Presumido
    getLucroPresumidoRates(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/calculator/lucro-presumido/rates`);
    }

    // Método para comparar regimes
    compareRegimes(data: {
        revenue: number,
        expenses: number,
        activityType: string,
        grossRevenueLast12Months: number
    }): Observable<{
        simplesNacional: TaxResult,
        lucroPresumido: TaxResult,
        lucroReal: TaxResult
    }> {
        return this.http.post<any>(`${environment.apiUrl}/calculator/compare-regimes`, data);
    }
}
