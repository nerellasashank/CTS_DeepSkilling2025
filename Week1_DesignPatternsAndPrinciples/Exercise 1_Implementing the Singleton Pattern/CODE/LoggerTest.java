package com.week1;

public class LoggerTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Starting the application...");

        Logger logger2 = Logger.getInstance();
        logger2.log("Application is running.");

        if (logger1 == logger2) {
            System.out.println("Same logger used throughout. Singleton works!");
        } else {
            System.out.println("Different loggers used. Singleton failed!");
        }
    }
}


