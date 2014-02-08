﻿(function(){
    angular.module('ui.i18n').service('ui-i18n-da', ['ui-i18nService',
      function (i18nService) {
        i18nService.add('da',{
          aggregate:{
            label: 'artikler'
          },
          groupPanel:{
            description: 'Grupér rækker udfra en kolonne ved at trække dens overskift hertil.'
          },
          search:{
            placeholder: 'Søg...',
            showingItems: 'Viste rækker:',
            selectedItems: 'Valgte rækker:',
            totalItems: 'Rækker totalt:',
            size: 'Side størrelse:',
            first: 'Første side',
            next: 'Næste side',
            previous: 'Forrige side',
            last: 'Sidste side'
          },
          menu:{
            text: 'Vælg kolonner:',
          }
        });
      }]);
})();