export default {
  title: 'Homepage',
  slug: '/',
  description:
    'An IT Service Provider and Connected devices setup by <a class="text-light font-weight-bold" href="https://github.com/dyarfi">@xconnect</a>',
  metaTitle: 'We provide IT Solution for your company',
  metaDescription: 'We provide IT Solution for your company and your clients',
  metaImg:
    'https://images.unsplash.com/photo-1475738198235-4b30fc20cff4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;format=auto&amp;fit=crop&amp;w=1487&amp;q=80',
  block_top: {
    title:
      '<h1 class="display-3 text-warning">Information System, Connected devices, Internet and Dashboard</h1>',
    image:
      'https://images.unsplash.com/photo-1516052315710-aa8a60249a00?ixlib=rb-1.2.1&amp;format=auto&amp;fit=crop&amp;w=1487&amp;q=80',
    body:
      'A Connected devices setup by <a class="text-light font-weight-bold" href="https://github.com/dyarfi">@dyarfi</a>',
  },
  services: [
    {
      title:
        'Connected Devices. <span class="text-muted">Internet of Things.</span>',
      description:
        'With network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and network connectivity which enable these objects to connect and exchange data. Each thing is uniquely identifiable through its embedded computing system but is able to inter-operate within the existing Internet infrastructure. Experts estimate that the IoT will consist of about 30 billion objects by 2020.',
      image:
        'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&h=960&q=70',
      url: 'service#1',
    },
    {
      title:
        'Dashboard Analysis. <span class="text-muted">IOT Data Timeline.</span>',
      description:
        "The world's technological per-capita capacity to store information has roughly doubled every 40 months since the 1980s as of 2012, every day 2.5 exabytes (2.5×1018) of data are generated. By 2025, IDC predicts there will be 163 zettabytes of data. One question for large enterprises is determining who should own big-data initiatives that affect the entire organization.",
      image:
        'https://images.unsplash.com/photo-1520367691844-3df6787b3b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=960&q=70',
      url: 'service#2',
    },
    {
      title:
        'Big Data Analysis. <span class="text-muted">Tuning up the Power.</span>',
      description:
        'Data sets grow rapidly - in part because they are increasingly gathered by cheap and numerous information-sensing Internet of things devices such as mobile devices, aerial (remote sensing), software logs, cameras, microphones, radio-frequency identification (RFID) readers and wireless sensor networks.',
      image:
        'https://images.unsplash.com/photo-1529910173308-89b53ef12f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&h=960&q=70',
      url: 'service#3',
    },
  ],
  packages: [
    {
      category: 'hams',
      image: 'assets/img/menu768x768px6.jpg',
      title: 'Connected Devices and Sensors',
      description: 'Arduino, Raspbery, Watson or Adafruit ',
      price: '11.5',
      tag: 'warning',
      label: 'popular',
    },
    {
      category: 'hams',
      image: 'assets/img/menu768x768px5.jpg',
      title: 'IOT Big Data Analytics',
      description: 'Big Data and Analytics Dashboard for sensor projects.',
      price: '22.23',
      tag: 'analytics',
      label: 'popular',
    },
    {
      category: 'steaks',
      image: 'assets/img/menu768x768px1.jpg',
      title: 'Device Data Counter Status',
      description: 'Up to 500 registered devices, data analyzed per month.',
      price: '12.2',
      label: 'Hot Plate',
      tag: 'default',
    },
    // {
    //   category: 'dinner',
    //   image: 'assets/img/menu768x768px2.jpg',
    //   title: 'Enterprise Edition Package',
    //   description: 'All features with cloud storage and Full support.',
    //   price: '10',
    //   label: 'Popular',
    //   tag: 'warning',
    // },
  ],
};
