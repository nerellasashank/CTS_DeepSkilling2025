package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

class CalculatorTest {
    public int add(int a, int b) {
        return a + b;
    }
    public int divide(int a, int b) {
        return a / b;
    }
}
public class ArrangeActAssertDemo {
	CalculatorTest calc;

    @Before
    public void setUp() {
        calc = new CalculatorTest();
        System.out.println("Setup done.");
    }

    @After
    public void tearDown() {
        System.out.println("Test finished.\n");
    }

    @Test
    public void testAdd() {
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }
    
    @Test
    public void testDivision() {
        int result = calc.divide(10, 2);
        assertEquals(5, result);
    }
}