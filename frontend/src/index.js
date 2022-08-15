import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_est from "./translations/est/common.json"
import common_en from "./translations/en/common.json"
import common_ru from "./translations/ru/common.json"




i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'est',
    resources: {
        est: {
            common: common_est
        },
        en: {
            common: common_en
        },
        ru: {
            common: common_ru
        }
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
);

