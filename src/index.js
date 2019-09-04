import AerisWeather from '@aerisweather/javascript-sdk';
document.addEventListener("DOMContentLoaded", function () {
    const aeris = new AerisWeather(*, *);
    const config = {
        map: {
            strategy: 'mapbox',
            zoom: 4,
            accessToken: *,

        },
        panels: {
            layers: {
                buttons: [{
                    id: 'tropical-cyclones',
                    value: 'tropical-cyclones',
                    title: 'cyclones'
                }, {
                    id: 'satellite',
                    value: 'satellite:75',
                    title: 'Satellite'
                }, {
                    id: 'alerts',
                    value: 'alerts',
                    title: 'Alerts'
                }]
            },
            timeline: {
                enabled: true,
                position: {
                    pin: 'bottom',
                    translate: {
                        y: -5,
                        x: 5
                    }
                },
                range: {
                    // set the initial timeline offset range value
                    value: [-24, 72],
                    // set the min and max time offsets for the timeline range
                    range: {
                        min: -(24*2),
                        max: 24*5
                    }
                }
            }
        },
        
    }
    return aeris.apps().then((apps) => {
        const aerisApp = new apps.InteractiveMapApp(document.getElementById("root"), config)
    });

});