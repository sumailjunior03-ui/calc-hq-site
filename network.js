/* GA4 — Calc-HQ Network Analytics (single injection point) */
(function(){if(!window.__GA4_LOADED){window.__GA4_LOADED=true;var id="G-W4SWZ1YRS2";var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag("js",new Date());gtag("config",id);}})();

window.CALC_HQ_NETWORK = [
  {
    name: "BizDayChecker",
    slug: "bizdaychecker",
    url: "https://bizdaychecker.com",
    description: "Business day calculator for future and past dates.",
    category: "business-days",
    live: true
  },
  {
    name: "Bank Cutoff Checker",
    slug: "bankcutoffchecker",
    url: "https://bankcutoffchecker.com",
    description: "ACH and wire cutoff time checker by bank.",
    category: "banking",
    live: true
  },
  {
    name: "Hourly to Salary Calculator",
    slug: "hourly2salarycalc",
    url: "https://hourly2salarycalc.com",
    description: "Convert hourly pay into weekly, monthly, and annual salary estimates.",
    category: "income",
    live: true
  },
  {
    name: "Salary vs Inflation Calculator",
    slug: "salaryvsinflation",
    url: "https://salaryvsinflation.com",
    description: "Compare wage growth against inflation-adjusted purchasing power.",
    category: "income",
    live: true
  },
  {
    name: "1099 vs W-2 Calculator",
    slug: "1099vsw2calc",
    url: "https://1099vsw2calc.com",
    description: "Compare contractor and employee take-home estimates.",
    category: "tax",
    live: true
  },
  {
    name: "Payroll Date Checker",
    slug: "payrolldatechecker",
    url: "https://payrolldatechecker.com",
    description: "Calculate payroll processing and submit dates around holidays.",
    category: "business-days",
    live: true
  },
  {
    name: "Freelance Income Calculator",
    slug: "freelanceincomecalc",
    url: "https://freelanceincomecalc.com",
    description: "Estimate gross freelance earnings from your hourly rate and schedule.",
    category: "income",
    live: true
  },
  {
    name: "Quarterly Tax Calculator",
    slug: "quarterlytaxcalc",
    url: "https://quarterlytaxcalc.com",
    description: "US federal quarterly estimated tax calculator for 1099 and self-employed.",
    category: "tax",
    live: true
  },
  {
    name: "Total Compensation Calculator",
    slug: "totalcompcalc",
    url: "https://totalcompcalc.com",
    description: "Compare two job offers side by side including salary, bonus, equity, and benefits.",
    category: "income",
    live: true
  },
  {
    name: "Overtime Pay Calculator",
    slug: "overtimepaycalc",
    url: "https://overtimepaycalc.com",
    description: "Calculate overtime pay with time-and-a-half and weekly earnings estimates.",
    category: "income",
    live: true
  },
  {
    name: "After-Tax Salary Calculator",
    slug: "aftertaxsalarycalc",
    url: "https://aftertaxsalarycalc.com",
    description: "Estimate take-home salary after federal and state income tax deductions.",
    category: "tax",
    live: true
  }
];

(function () {
  var filter = document.querySelector('[data-tool-filter]');
  var grid = document.querySelector('[data-tool-grid]');
  if (!grid) return;

  function renderGrid(category) {
    var network = window.CALC_HQ_NETWORK;
    var items = network.filter(function (t) {
      return t.live === true && (category === 'all' || t.category === category);
    });

    if (!items.length) {
      grid.innerHTML = '<p style="color:#6b7280">No tools in this section yet.</p>';
      return;
    }

    grid.innerHTML = items.map(function (t) {
      return '<article class="tool-card">' +
        '<div>' +
        '<h3>' + t.name + '</h3>' +
        '<p>' + t.description + '</p>' +
        '</div>' +
        '<a class="card-link" href="' + t.url + '" target="_blank" rel="noopener">Visit Tool &rarr;</a>' +
        '</article>';
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderGrid('all');
    if (filter) {
      filter.addEventListener('change', function () {
        renderGrid(filter.value);
      });
    }
  });
})();
