package com.cognizant;

import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Insert {

	public static void main(String[] args) {
		
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		Scanner sc=new Scanner(System.in);
		
		SessionFactory sf = cfg.buildSessionFactory();
		Session s = sf.openSession();
		
		
		boolean flag=true;
		while(flag)
		{
			String ch=sc.next();
			if(ch.charAt(0)=='y')
			{
				Transaction t = s.beginTransaction();
				Employee e=new Employee();
				
				e.setEid(sc.nextInt());
				e.setEname(sc.next());
				e.setEdepartment(sc.next());
				
				s.persist(e);
				t.commit();
				
				System.out.println("Employee Inserted Successfully");
				System.out.println("ID: "+e.getEid()+" Name: "+e.getEname()+" Department"+e.getEdepartment());
			}
			else
			{
				flag=false;
			}
		}
		
		
		
		s.close();
		sf.close();

	}

}
