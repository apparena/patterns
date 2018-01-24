import React from 'react';
import {Card} from 'apparena-patterns-react';

const title = 'Video production';

function render() {
    return (
        <div>
            <Card>
                <div type="card-header">
                    Video Production
                </div>
                <div type="card-body">
                    <h4>Richtlinien zum Produzieren von Video-Beiträgen:</h4>

                    <ul>
                        <li><strong>Positives Licht</strong></li>
                        <li>Dauer 30 Sekunden bis 3 Minuten</li>
                        <li>Gleiches Intro</li>
                        <li>Feste Gliederung - Anzahl Gliderungspunkte fest vorgegeben</li>
                        <li>Gleiche Begrüßung: "Salve"</li>
                        <li>Standardisiertes Outfit</li>
                        <li>Immer einen Call-to-action die Seite zu liken!</li>
                        <li>Content generosity - auf eine maximale Inhaltsqualität ist zu achten</li>
                        <li>Gleiches Kamera-Format</li>
                    </ul>
                </div>
            </Card>,
            <Card>
                <div type="card-header">
                    Vorbereitung
                </div>
                <div type="card-body">
                    <h4>Folgende Punkte sind bei der Vorbereitung zu beachten:</h4>

                    <ul>
                        <li>Marktanalyse: Welches sind die besten videos zum Thema?</li>
                        <li>Welche Keywords sollen verwendet werden</li>
                        <li>Drehbücher mit <a href="https://www.celtx.com/index.html" target="_blank">Celtx</a> schreiben (Julius hat einen Account)</li>
                        <li><strong>Ziel: Das beste Video am Markt. IMMER!</strong></li>
                    </ul>
                </div>
            </Card>,
        </div>

    );
}

export default {
    title,
    render
};