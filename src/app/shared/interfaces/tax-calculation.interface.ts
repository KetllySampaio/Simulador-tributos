export interface TaxBase {
    revenue: number;
    expenses: number;
    period: string;
    cnpj?: string;
}

export interface SimplesNacional extends TaxBase {
    annexType: 'I' | 'II' | 'III' | 'IV' | 'V';
    grossRevenueLast12Months: number;
}

export interface LucroPresumido extends TaxBase {
    activityType: 'commerce' | 'service' | 'industry' | 'transportation' | 'other';
    presumedProfitPercentage: number;
}

export interface LucroReal extends TaxBase {
    deductions: {
        depreciation?: number;
        donations?: number;
        otherDeductions?: number;
    };
    additions: {
        nonDeductibleExpenses?: number;
        otherAdditions?: number;
    };
}

export interface TaxResult {
    totalTax: number;
    breakdown: {
        [key: string]: number;
    };
    effectiveRate: number;
    regime: 'simplesNacional' | 'lucroPresumido' | 'lucroReal';
}
