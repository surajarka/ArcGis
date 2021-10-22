import React, { ReactElement, useRef, useEffect, useState } from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap';
import Compass from "@arcgis/core/widgets/Compass";

import { loadModules } from 'esri-loader'

interface Props {

}

const Map = ({ }: Props): ReactElement => {
    const MapEl = useRef(null)
    const [reg, setReg] = useState(false)
    useEffect(() => {
        let view: any;
        loadModules(["esri/config", "esri/views/MapView", "esri/WebMap", "esri/widgets/BasemapGallery", "esri/widgets/ScaleBar", "esri/widgets/Home", "esri/rest/locator", "esri/widgets/LayerList"], {
            css: true
        }).then(([esriConfig, MapView, WebMap, BasemapGallery, ScaleBar, Home, locator, LayerList]) => {

            esriConfig.apiKey = process.env.REACT_APP_ESRI_KEY
            const serviceUrl = "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";
            const webmap = new WebMap({
                basemap: 'topo-vector'
            })

            view = new MapView({
                map: webmap,
                // center: [40, 174],
                center: [171, -43],
                zoom: 5,
                // ref as a container
                container: MapEl.current
            })

            let homeWidget = new Home({
                view: view
            });

            let scaleBar = new ScaleBar({
                view: view
            });

            let layerList = new LayerList({
                view: view
            });


            let compass = new Compass({
                view
            });
            view.ui.add(homeWidget, "top-left");

            view.ui.add(scaleBar, {
                position: "bottom-left"
            });

            // view.ui.add(layerList, {
            //     position: "top-right"
            // });



            const basemapGallery = new BasemapGallery({
                view,
                container: "basemapGalleryDiv"
            });

            view.on("click", function (evt: any) {
                const params = {
                    location: evt.mapPoint
                };
                locator.locationToAddress(serviceUrl, params)
                    .then(function (response: any) { // Show the address found
                        const address = response.address;
                        showAddress(address, evt.mapPoint);
                    }, function (err: any) { // Show no address found
                        showAddress("No address found.", evt.mapPoint);
                    });
            });

            function showAddress(address: any, pt: any) {
                view.popup.open({
                    title:  + Math.round(pt.longitude * 100000)/100000 + ", " + Math.round(pt.latitude * 100000)/100000,
                    content: address,
                    location: pt
                });
            }

            // Add the widget to the top-right corner of the view

            if (reg) {
                view.ui.add(basemapGallery, {
                    position: "top-right"
                });
            }


            view.ui.add(compass, "top-left");


        })
        return () => {
            // close the map view
            if (!!view) {
                view.destroy()
                view = null
            }
        }
    })

    const onclick = (e: any) => {
        e.preventDefault()
        setReg(!reg)
    }

    return (
        <>
            <Card>
                <Card.Header>
                    <Row>
                        <Col md={4}>ArcGis Map</Col>
                        <Col md={{ span: 4, offset: 4 }} className="text-end"> <Button onClick={onclick} variant="secondary">Base Map Toggle</Button></Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <div style={{ height: 800 }} ref={MapEl}>

                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Map
