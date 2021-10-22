import React from 'react';
import Map from "./Map" 
jest.mock('Map', () => {
    describe('Test API For Map Data', async () => {
        it('ack', async () => {
            const response = await fetch('http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer');
            expect(response).toBeDefined();
            
        });
    });
  });

