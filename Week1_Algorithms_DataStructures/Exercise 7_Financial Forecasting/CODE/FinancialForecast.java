package com.forecast;

public class FinancialForecast {
    public static double futureValue(double pv, double rate, int years) {
        if (years == 0) return pv;
        return futureValue(pv, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double pv = 10000;
        double rate = 0.08;
        int years = 5;

        double fv = futureValue(pv, rate, years);
        System.out.printf("Future value after %d years: ₹%.2f", years, fv);
    }
}
