package com.mockito;

import static org.mockito.Mockito.*; 
import org.junit.jupiter.api.Test; 
import org.mockito.Mockito; 
 
public class MyServiceTest { 
    @Test 
    public void testVerifyInteraction() { 
    	
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        MyService service = new MyService(mockApi); 
        
        service.fetchData(); 
        
        verify(mockApi).getData(); 
    } 
} 





























//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.*; 
//import org.junit.jupiter.api.Test; 
//import org.mockito.Mockito; 
// 
//public class MyServiceTest { 
//	
//    @Test 
//    public void testExternalApi() { 
//    	
//        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
//        
//        when(mockApi.getData()).thenReturn("Mock Data"); 
//        MyService service = new MyService(mockApi); 
//        String result = service.fetchData(); 
//        
//        assertEquals("Mock Data", result); 
//        
//    } 
//}
