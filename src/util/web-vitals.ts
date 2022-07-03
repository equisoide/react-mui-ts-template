// Web Vitals is an initiative by Google to provide unified guidance
// for quality signals that are essential to delivering a great user
// experience on the web.
// Learn more: https://web.dev/vitals
import { ReportHandler } from 'web-vitals';

// Initializes Web Vitals with a custom reporter
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Default export
export default reportWebVitals;
