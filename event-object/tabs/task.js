let tabs = document.querySelectorAll('.tab');
let tabsArr = [...tabs];
let tabContents = document.querySelectorAll('.tab__content');
let tabContentsArr = [...tabContents];

for (const tab of tabsArr) {
  tab.addEventListener('click', (event) => {
    if (tab.classList.contains('tab_active')) {
      return;
    }

    for (const tabContent of tabContentsArr) {
      if ((event.target === tab) && (tabContentsArr.indexOf(tabContent) === tabsArr.indexOf(tab))) {
        let tabActive = tabsArr.find(tabActive => tabActive.classList.contains('tab_active'));
        tabActive.classList.remove('tab_active');
        let tabContentActive = tabContentsArr.find(tabContentActive => tabContentActive.classList.contains('tab__content_active'));
        tabContentActive.classList.remove('tab__content_active');
        tab.classList.add('tab_active');
        tabContent.classList.add('tab__content_active');
      }
    }  
  });
}