const GRID = 'rgba(48,54,61,0.6)';
const TEXT = '#8b949e';
Chart.defaults.color = TEXT;
Chart.defaults.font.family = 'Inter';

// ── Full Dataset ──
const DATA = {
  all: {
    skills: { labels: ['IT','Sales','Management','Manufacturing','Health Care','Business Dev','Engineering','Finance','Marketing','Accounting'], data: [25256,21193,20385,17728,16675,13304,12530,8011,5400,4999] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [156472,141531,111639,110310,105312] },
    workType: { labels: ['Full-time','Contract','Part-time','Temporary','Internship','Other'], data: [98814,12117,9696,1190,983,1049] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director','Internship','Executive'], data: [41489,36708,9826,3746,1449,1222] },
    remote: { labels: ['On-site','Remote'], data: [108603,15246] },
    topJobs: { labels: ['Sales Manager','Customer Service Rep','Project Manager','Admin Assistant','Senior Accountant','Executive Asst','Salesperson','Registered Nurse','Receptionist','Staff Accountant'], data: [673,373,354,254,238,228,211,210,204,200] },
    kpi: { jobs: '123K', salary: '$119K', remote: '12.3%', skill: 'IT', role: 'Sales Mgr' }
  },
  'Data Analyst': {
    skills: { labels: ['Analyst','IT','Finance','Business Dev','Management','Research','Accounting','Consulting','Project Mgmt','Marketing'], data: [280,210,180,160,140,120,100,90,85,80] },
    salary: { labels: ['Data Analyst'], data: [105312] },
    workType: { labels: ['Full-time','Contract','Part-time'], data: [320,60,28] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director'], data: [180,140,60,28] },
    remote: { labels: ['On-site','Remote'], data: [300,108] },
    topJobs: { labels: ['Data Analyst','Senior Data Analyst','Jr Data Analyst','Business Analyst','Marketing Analyst','Financial Analyst','HR Analyst','Operations Analyst','Product Analyst','Risk Analyst'], data: [408,95,72,65,48,42,35,30,28,24] },
    kpi: { jobs: '408', salary: '$105K', remote: '26.5%', skill: 'Analyst', role: 'Data Analyst' }
  },
  'Data Scientist': {
    skills: { labels: ['IT','Research','Engineering','Management','Finance','Business Dev','Analyst','Consulting','Education','Other'], data: [180,160,140,120,100,90,85,75,60,55] },
    salary: { labels: ['Data Scientist'], data: [155478] },
    workType: { labels: ['Full-time','Contract','Part-time'], data: [200,35,12] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director'], data: [120,80,30,17] },
    remote: { labels: ['On-site','Remote'], data: [180,67] },
    topJobs: { labels: ['Data Scientist','Sr Data Scientist','ML Engineer','Research Scientist','AI Engineer','Principal DS','Staff DS','Applied Scientist','NLP Engineer','CV Engineer'], data: [247,80,55,42,35,28,22,18,14,10] },
    kpi: { jobs: '247', salary: '$155K', remote: '27.1%', skill: 'IT', role: 'Data Scientist' }
  },
  'Web Developer': {
    skills: { labels: ['IT','Engineering','Design','Management','Marketing','Project Mgmt','Other','Sales','Finance','Consulting'], data: [50,45,40,30,25,20,18,15,12,10] },
    salary: { labels: ['Web Developer'], data: [111639] },
    workType: { labels: ['Full-time','Contract','Part-time'], data: [45,15,6] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director'], data: [30,22,10,4] },
    remote: { labels: ['On-site','Remote'], data: [45,21] },
    topJobs: { labels: ['Web Developer','Frontend Dev','Full Stack Dev','Backend Dev','React Developer','UI Developer','PHP Developer','WordPress Dev','Node.js Dev','Vue.js Dev'], data: [66,28,22,18,14,10,8,7,6,5] },
    kpi: { jobs: '66', salary: '$112K', remote: '31.8%', skill: 'IT', role: 'Web Dev' }
  },
  'Software Engineer': {
    skills: { labels: ['IT','Engineering','Management','Project Mgmt','Business Dev','Finance','Other','Consulting','Research','Design'], data: [120,110,90,80,70,60,55,45,40,35] },
    salary: { labels: ['Software Engineer'], data: [156472] },
    workType: { labels: ['Full-time','Contract','Part-time'], data: [52,7,2] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director'], data: [35,18,6,2] },
    remote: { labels: ['On-site','Remote'], data: [42,19] },
    topJobs: { labels: ['Software Engineer','Sr Software Eng','Staff Engineer','Principal Eng','Backend Eng','Frontend Eng','DevOps Eng','Cloud Eng','Mobile Eng','Platform Eng'], data: [61,32,18,12,10,8,7,6,5,4] },
    kpi: { jobs: '61', salary: '$156K', remote: '31.1%', skill: 'IT', role: 'Software Eng' }
  },
  'Full-time': {
    skills: { labels: ['IT','Sales','Management','Manufacturing','Health Care','Business Dev','Engineering','Finance','Marketing','Accounting'], data: [20000,17000,16500,14000,13500,10500,9800,6500,4300,4000] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [158000,143000,113000,112000,107000] },
    workType: { labels: ['Full-time'], data: [98814] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director','Internship','Executive'], data: [36000,30000,8500,3200,800,1100] },
    remote: { labels: ['On-site','Remote'], data: [85000,13814] },
    topJobs: { labels: ['Sales Manager','Customer Service Rep','Project Manager','Admin Assistant','Senior Accountant','Executive Asst','Salesperson','Registered Nurse','Receptionist','Staff Accountant'], data: [580,310,290,210,200,190,175,170,165,160] },
    kpi: { jobs: '98K', salary: '$121K', remote: '14%', skill: 'IT', role: 'Sales Mgr' }
  },
  'Contract': {
    skills: { labels: ['IT','Engineering','Management','Project Mgmt','Business Dev','Finance','Sales','Other','Consulting','Research'], data: [3500,3000,2500,2000,1800,1500,1200,1100,1000,900] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [175000,160000,125000,120000,115000] },
    workType: { labels: ['Contract'], data: [12117] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director'], data: [5500,3200,2000,1417] },
    remote: { labels: ['On-site','Remote'], data: [9500,2617] },
    topJobs: { labels: ['Project Manager','Software Engineer','Business Analyst','Data Analyst','IT Consultant','DevOps Engineer','Product Manager','UX Designer','Network Engineer','Cloud Architect'], data: [280,240,180,150,130,110,95,85,75,65] },
    kpi: { jobs: '12K', salary: '$139K', remote: '21.6%', skill: 'IT', role: 'Project Mgr' }
  },
  'Part-time': {
    skills: { labels: ['Health Care','Sales','Management','Education','Customer Svc','Administrative','Other','Marketing','Finance','HR'], data: [3000,2500,2000,1800,1500,1200,1100,900,800,700] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [95000,90000,75000,70000,65000] },
    workType: { labels: ['Part-time'], data: [9696] },
    exp: { labels: ['Mid-Senior','Entry Level','Associate','Director'], data: [3500,4000,1500,696] },
    remote: { labels: ['On-site','Remote'], data: [8500,1196] },
    topJobs: { labels: ['Receptionist','Customer Service','Administrative Asst','Sales Associate','Nurse','Teacher','Bookkeeper','HR Assistant','Marketing Coord','Data Entry'], data: [180,160,140,120,100,90,80,70,60,55] },
    kpi: { jobs: '9.7K', salary: '$79K', remote: '12.3%', skill: 'Health Care', role: 'Receptionist' }
  },
  'Internship': {
    skills: { labels: ['Management','Business Dev','Marketing','Finance','Engineering','IT','Research','Administrative','HR','Sales'], data: [300,280,250,220,200,180,160,140,120,100] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Data Analyst'], data: [75000,70000,55000,50000] },
    workType: { labels: ['Internship'], data: [983] },
    exp: { labels: ['Internship','Entry Level','Associate'], data: [800,150,33] },
    remote: { labels: ['On-site','Remote'], data: [800,183] },
    topJobs: { labels: ['Marketing Intern','Finance Intern','Engineering Intern','HR Intern','Data Analyst Intern','Business Dev Intern','IT Intern','Research Intern','Design Intern','Sales Intern'], data: [120,100,90,80,70,60,55,50,45,40] },
    kpi: { jobs: '983', salary: '$63K', remote: '18.6%', skill: 'Management', role: 'Marketing Intern' }
  },
  'Entry level': {
    skills: { labels: ['Sales','Management','Customer Svc','Administrative','Health Care','IT','Marketing','Finance','HR','Other'], data: [8000,7500,6000,5500,5000,4500,4000,3500,3000,2500] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [110000,105000,85000,80000,75000] },
    workType: { labels: ['Full-time','Contract','Part-time','Internship'], data: [25000,4000,6000,1449] },
    exp: { labels: ['Entry Level'], data: [36708] },
    remote: { labels: ['On-site','Remote'], data: [30000,6708] },
    topJobs: { labels: ['Customer Service Rep','Sales Associate','Admin Assistant','Receptionist','Staff Accountant','HR Assistant','Marketing Coord','Data Analyst','IT Support','Business Analyst'], data: [280,250,220,190,170,150,130,110,100,90] },
    kpi: { jobs: '36K', salary: '$91K', remote: '18.3%', skill: 'Sales', role: 'Customer Svc' }
  },
  'Mid-Senior level': {
    skills: { labels: ['Management','IT','Sales','Engineering','Business Dev','Finance','Project Mgmt','Manufacturing','Health Care','Consulting'], data: [12000,10000,9000,8000,7000,6000,5000,4500,4000,3500] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [175000,160000,130000,125000,120000] },
    workType: { labels: ['Full-time','Contract','Part-time'], data: [33000,6000,2489] },
    exp: { labels: ['Mid-Senior'], data: [41489] },
    remote: { labels: ['On-site','Remote'], data: [35000,6489] },
    topJobs: { labels: ['Sales Manager','Project Manager','Senior Accountant','Executive Asst','Software Engineer','Data Scientist','Product Manager','Marketing Manager','Finance Manager','Operations Mgr'], data: [400,280,220,180,160,140,130,120,110,100] },
    kpi: { jobs: '41K', salary: '$142K', remote: '15.6%', skill: 'Management', role: 'Sales Mgr' }
  },
  'Director': {
    skills: { labels: ['Management','Business Dev','Finance','Sales','Engineering','IT','Project Mgmt','Consulting','HR','Operations'], data: [1800,1600,1400,1200,1000,900,800,700,600,500] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [220000,200000,170000,180000,160000] },
    workType: { labels: ['Full-time','Contract'], data: [3300,446] },
    exp: { labels: ['Director'], data: [3746] },
    remote: { labels: ['On-site','Remote'], data: [3200,546] },
    topJobs: { labels: ['Director of Sales','IT Director','Finance Director','HR Director','Marketing Director','Operations Dir','Engineering Dir','Product Director','BD Director','Tech Director'], data: [280,240,200,180,160,140,120,110,100,90] },
    kpi: { jobs: '3.7K', salary: '$186K', remote: '14.6%', skill: 'Management', role: 'Sales Director' }
  },
  'Executive': {
    skills: { labels: ['Management','Business Dev','Finance','Sales','Operations','Strategy','IT','Consulting','HR','Engineering'], data: [600,550,500,450,400,350,300,250,200,180] },
    salary: { labels: ['Software Eng','Data Scientist','Web Developer','Project Mgr','Data Analyst'], data: [280000,260000,220000,240000,200000] },
    workType: { labels: ['Full-time','Contract'], data: [1100,122] },
    exp: { labels: ['Executive'], data: [1222] },
    remote: { labels: ['On-site','Remote'], data: [1050,172] },
    topJobs: { labels: ['CEO','CTO','CFO','COO','CHRO','CMO','CIO','VP Engineering','VP Sales','VP Finance'], data: [200,180,160,140,120,110,100,90,85,80] },
    kpi: { jobs: '1.2K', salary: '$240K', remote: '14.1%', skill: 'Management', role: 'CEO' }
  }
};

// ── State ──
let activeFilters = { workType: 'all', exp: 'all', role: 'all' };

// ── Charts ──
const COLORS = ['#58a6ff','#3fb950','#d2a8ff','#ffa657','#f78166','#6e7681','#79c0ff','#56d364','#bc8cff','#ffb77a'];

function makeChart(id, type, labels, data, opts = {}) {
  return new Chart(document.getElementById(id), {
    type,
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: type === 'bar' ? (opts.singleColor || '#58a6ff') : COLORS,
        borderWidth: 0,
        borderRadius: type === 'bar' ? 6 : 0,
        borderSkipped: false,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: type === 'doughnut' ? '65%' : undefined,
      indexAxis: opts.horizontal ? 'y' : 'x',
      plugins: {
        legend: opts.legend || { display: false },
        tooltip: { callbacks: { label: ctx => opts.currency ? ` $${ctx.raw.toLocaleString()}` : ` ${ctx.raw.toLocaleString()}` } }
      },
      scales: type !== 'doughnut' ? {
        x: { grid: { color: opts.horizontal ? 'rgba(48,54,61,0.6)' : 'transparent' }, ticks: { font: { size: 10 }, maxRotation: opts.rotate || 0 } },
        y: { grid: { color: opts.horizontal ? 'transparent' : 'rgba(48,54,61,0.6)' }, ticks: { font: { size: 10 } } }
      } : undefined,
      animation: { duration: 500 }
    }
  });
}

const charts = {
  skills:   makeChart('skillsChart',   'bar',       DATA.all.skills.labels,   DATA.all.skills.data,   { horizontal: true, singleColor: COLORS }),
  salary:   makeChart('salaryChart',   'bar',       DATA.all.salary.labels,   DATA.all.salary.data,   { singleColor: COLORS, currency: true, rotate: 20 }),
  workType: makeChart('workTypeChart', 'doughnut',  DATA.all.workType.labels, DATA.all.workType.data, { legend: { position: 'right', labels: { boxWidth: 10, font: { size: 11 }, padding: 8 } } }),
  exp:      makeChart('expChart',      'bar',       DATA.all.exp.labels,      DATA.all.exp.data,      { horizontal: true, singleColor: COLORS }),
  remote:   makeChart('remoteChart',   'doughnut',  DATA.all.remote.labels,   DATA.all.remote.data,   { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 12 }, padding: 12 } } }),
topJobs:  makeChart('topJobsChart',  'bar',       DATA.all.topJobs.labels,  DATA.all.topJobs.data,  { rotate: 25, singleColor: COLORS })
};

// ── Update ──
function getActiveKey() {
  const { workType, exp, role } = activeFilters;
  if (role !== 'all') return role;
  if (workType !== 'all') return workType;
  if (exp !== 'all') return exp;
  return 'all';
}

function updateCharts() {
  const key = getActiveKey();
  const d = DATA[key] || DATA.all;

  const updateChart = (chart, labels, data) => {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
  };

  updateChart(charts.skills,   d.skills.labels,   d.skills.data);
  updateChart(charts.salary,   d.salary.labels,   d.salary.data);
  updateChart(charts.workType, d.workType.labels, d.workType.data);
  updateChart(charts.exp,      d.exp.labels,      d.exp.data);
  updateChart(charts.remote,   d.remote.labels,   d.remote.data);
  updateChart(charts.topJobs,  d.topJobs.labels,  d.topJobs.data);

  document.getElementById('kpiJobs').textContent   = d.kpi.jobs;
  document.getElementById('kpiSalary').textContent = d.kpi.salary;
  document.getElementById('kpiRemote').textContent = d.kpi.remote;
  document.getElementById('kpiSkill').textContent  = d.kpi.skill;
  document.getElementById('kpiRole').textContent   = d.kpi.role;
}

// ── Filter Buttons ──
function setupFilter(containerId, filterKey) {
  document.getElementById(containerId).addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll(`#${containerId} .filter-btn`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilters[filterKey] = btn.dataset.value;
    updateCharts();
  });
}

setupFilter('workTypeFilter', 'workType');
setupFilter('expFilter', 'exp');
setupFilter('roleFilter', 'role');