package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
	
	private BookRepository bookRepository;

    public BookService() {
        this.bookRepository = new BookRepository();
    }

    public void addBook(String title) {
        System.out.println("Adding book: " + title);
        bookRepository.saveBook(title);
    }
}
