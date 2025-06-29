package com.example;
import org.junit.*;
import static org.junit.Assert.*;

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

public class TestDemo {
	
	@Test
    public void test() {
        Calculator calc = new Calculator();
        int result = calc.add(10, 5);
        System.out.println(result);
        assertEquals(15, result);
    }

}
