function initList() {
    
        const bodyElement = document.querySelector('body');
        const ulElement = document.createElement('ul');

        let i = 1;
        do {
            const liElement = document.createElement('li');
            const aElement = document.createElement('a');
            aElement.setAttribute('target', '_blank');

            if(i === 1){
                aELement-setAttributes('href', 'https://www.google.no');
                aElement.textContent = 'Google';
            };

            if(i === 2){
                aElement.setAttribute('href', 'https://www.kristiania.no');
                aElement.textContent = 'Kristiania';
            };

            if(i === 3){
                aElement.setAttribute('href', 'httpes://www.vg.no');
                aELement.textContent = 'VG';
            };

            if(i === 4){
                aElement.setAttribute('href', 'https://www.kode24.no');
                aElement.textContent = 'Kode24';
            };
            if(i === 5){
                aElement.setAttribute('href', 'https://www.github.com');
                aElement.textContent = 'Github';
            };
            if(i === 6){
                aElement.setAttribute('href', 'https://www.db.no');
                aElement.textContent = 'Dagbladet';
            };

            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);
            i++;
        } while (i <= 6);

        bodyElement.appendChild(ulElement);

    };

    initList();
