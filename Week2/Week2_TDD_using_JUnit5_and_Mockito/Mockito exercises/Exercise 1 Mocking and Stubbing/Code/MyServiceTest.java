package com.mockito;

import org.junit.Test;                     
import static org.junit.Assert.*;          
import static org.mockito.Mockito.*;      

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock
        MyService service = new MyService(mockApi);

        // Step 4: Call and verify
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
