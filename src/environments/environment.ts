// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:"https://morpheusdev.service-now.com/",
  // API_URL:"https://morpheus.service-now.com/",
  getOrderOverview:"api/x_intp_cet_and_fin/cet/order_overview",
  getOrderRecords:"api/x_intp_cet_and_fin/cet/get_rows_sales",
  getSalesOverview:"api/x_intp_cet_and_fin/cet/sales_overview",
  getSalesRecords:"api/x_intp_cet_and_fin/cet/get_rows_sales",
  getOrderConversionOpp:"api/x_intp_cet_and_fin/orderconversion/number",
  getOrderConversionAmt:"api/x_intp_cet_and_fin/orderconversion/amount",
  getOrdersBooked:"api/x_intp_cet_and_fin/cet/order_booked_last_month",
  getBidWinRate:"api/x_intp_cet_and_fin/cet/bid_win_rate",
  getAvgOrderCycle:"api/x_intp_cet_and_fin/cet/avg_order_cycle",
  getAvgOrderSize:"api/x_intp_cet_and_fin/cet/average_order_size",
  getOrderRunRate:"api/x_intp_cet_and_fin/cet/order_run_rate",
  getEstimatedRunRate:"api/x_intp_cet_and_fin/cet/estimated_order_run_rate",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
