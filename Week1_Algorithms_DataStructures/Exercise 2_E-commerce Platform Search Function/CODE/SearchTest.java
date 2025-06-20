package com.ecommerce;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shampoo", "Personal Care"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Table", "Furniture")
        };

        Product result1 = LinearSearch.search(products, "Phone");
        System.out.println(result1 != null ? "Found: " + result1.getProductName() : "Not Found");

        Product result2 = BinarySearch.search(products, "Shampoo");
        System.out.println(result2 != null ? "Found: " + result2.getProductName() : "Not Found");
    }
}
