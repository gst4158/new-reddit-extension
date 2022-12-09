function updateDOM(element) {
  setTimeout(() => {
    // If no element provided, know the sidebar has changed position
    if (!element) {
      element = document.querySelector('[role="menu"]');
    }

    console.log(element)

    // Move home, all, popular to top of dropdown
    const filterInput = element.querySelector('[id="header-subreddit-filter"]');
    const getFeeds = [
      element.querySelector('[id="focus-Home"]')
        ? element.querySelector('[id="focus-Home"]').previousSibling
        : null,
      element.querySelector('[id="focus-Home"]'),
      element.querySelector('[id="focus-Popular"]'),
      element.querySelector('[id="focus-All"]'),
      element.querySelector('[id="focus-HappeningNow"]'),
    ];

    console.log(getFeeds)

    if (filterInput) {
      getFeeds.reverse().forEach((item) => {
        if (item) {
          filterInput.insertAdjacentElement('afterend', item);
        }
      });
    }
  }, 250);
}

const dropdownBar = document.querySelector('[role="navigation"]');
if (dropdownBar) {
  dropdownBar.addEventListener('click', (event) => {
    const trigger = event.target;
    const sidebarTrigger = dropdownBar.querySelector('.icon-side_menu');
    const menuElm = dropdownBar.querySelector('[role="menu"]');
    

    if (trigger === sidebarTrigger) {
      updateDOM();
    }

    if (trigger === dropdownBar.querySelector('button')) {
      updateDOM(menuElm);
    }
  });
}

const sideMenu = document.querySelector('[role="menu"]');
if (sideMenu) {
  updateDOM(sideMenu);
}
