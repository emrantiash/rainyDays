import React from 'react';
// import ExamplePdf from '../../../public/hello.txt';
import Button from '../button/Button';

export default function Excel() {
    return (
        <div>

            <a
                href="https://www.stats.govt.nz/assets/Uploads/Business-operations-survey/Business-operations-survey-2022/Download-data/business-operations-survey-2022-price-and-wage-setting.csv"
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
            >
                <Button  text="Download .pdf file" />
            </a>
        </div>
    )
}
