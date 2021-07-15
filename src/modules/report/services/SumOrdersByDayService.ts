import Order from "@modules/order/entities/Order";
import ReportByDay from "../entities/reportByDay";

class SumOrdersByDayService {
    public async execute(orders: Order[]):Promise<ReportByDay[]> {
        const report: ReportByDay[] = [];

        if (!orders || !orders.length) return report;
                
        let date = new Date(orders[0].data);
        let dateCompare = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        let value = 0;
        for (let order of orders) {
            let orderDate = new Date(order.data);
            let orderDateCompare = `${orderDate.getFullYear()}-${orderDate.getMonth()+1}-${orderDate.getDate()}`;
            if (orderDateCompare === dateCompare) {
                value += order.valor;
            } else {
                report.push({
                    date: dateCompare,
                    value
                })
                
                dateCompare = orderDateCompare;
                value = order.valor;
            }
        }

        // alimenta o último valor
        report.push({
            date: dateCompare,
            value
        })

        return report;
    }
}

export default SumOrdersByDayService;