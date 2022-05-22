import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB
    }) => {
      // Cumulative Layout Shift (CLS)
      // The cumulative layout shift detects sudden changes to the webpage.
      // If a text or a link moves unexpectedly, we can end up clicking on
      // something else by accident. A layout shift occurs every time a
      // visible element changes its position. CLS measures the largest
      // burst of layout shifts where layout shifts occur rapidly, one after
      // another. Google states that we should optimize our website for a
      // CLS score of 0.1 or less.
      getCLS(onPerfEntry);

      // First Input Delay (FID)
      // First input delay is the moment between the user first interacting
      // with the page and the browser beginning to process the event handler
      // in response. In simpler terms, FID measures the delay in the event
      // processing.
      getFID(onPerfEntry);

      // First Contentful Paint (FCP)
      // The first contentful paint measures the delay between when the page
      // starts loading and when any part of the content is visible. Again,
      // we should strive to have an FCP of 1.8 seconds or lower.
      getFCP(onPerfEntry);

      // Largest Contentful Paint (LCP)
      // The largest contentful paint reports the render time of the largest
      // image or text block visible in the viewport. We should aim to have
      // an LCP of 2.5 seconds or less.
      getLCP(onPerfEntry);

      // Time to First Byte (TTFB)
      // The first contentful paint measures the delay between when the page
      // starts loading and when any part of the content is visible. Again,
      // we should strive to have an FCP of 1.8 seconds or lower.
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
