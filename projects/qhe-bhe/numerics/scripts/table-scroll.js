// Auto-wrap all tables in scrollable containers for mobile responsiveness
// This script runs after DOM is loaded and wraps every <table> in a .table-scroll-wrapper div

(function() {
  'use strict';

  function wrapTables() {
    // Find all tables that aren't already inside a scroll wrapper
    const tables = document.querySelectorAll('table:not(.table-scroll-wrapper table)');
    
    tables.forEach(function(table) {
      // Skip tables already inside a scrollable container
      const parent = table.parentElement;
      if (parent && (
        parent.classList.contains('table-scroll-wrapper') ||
        parent.classList.contains('table-responsive') ||
        parent.style.overflowX === 'auto'
      )) {
        return;
      }

      // Create wrapper div
      const wrapper = document.createElement('div');
      wrapper.className = 'table-scroll-wrapper';
      
      // Insert wrapper before table and move table into it
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  function wrapFigures() {
    // Find all figures that aren't already inside a scroll wrapper
    const figures = document.querySelectorAll('figure:not(.figure-scroll-wrapper figure)');
    
    figures.forEach(function(fig) {
      // Skip figures already inside a scrollable container
      const parent = fig.parentElement;
      if (parent && parent.classList.contains('figure-scroll-wrapper')) {
        return;
      }

      // Create wrapper div
      const wrapper = document.createElement('div');
      wrapper.className = 'figure-scroll-wrapper';
      
      // Insert wrapper before figure and move figure into it
      fig.parentNode.insertBefore(wrapper, fig);
      wrapper.appendChild(fig);
    });
  }

  function init() {
    wrapTables();
    wrapFigures();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also re-run after MathJax renders (math can cause layout shifts)
  if (window.MathJax) {
    window.MathJax.startup = window.MathJax.startup || {};
    const oldReady = window.MathJax.startup.ready;
    window.MathJax.startup.ready = function() {
      if (oldReady) oldReady.call(this);
      setTimeout(init, 100);
    };
  }
})();
