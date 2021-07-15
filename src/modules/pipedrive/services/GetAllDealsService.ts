import AppError from '@shared/errors/AppError';
import axios from 'axios';
import DealsPipedrive from "../entities/DealsPipedrive";

class GetAllDealsService {
    public async execute(): Promise<DealsPipedrive[]> {
        const deals: DealsPipedrive[] = [];
        try {
            const urlBase = process.env.ENDPOINT_PIPEDRIVE;
            const apiKey = process.env.APP_SECRET_PIPEDRIVE;
            const {data: response} = await axios.get(`${urlBase}/deals?status=won&api_token=${apiKey}`);

            if (response && response.data) {
                for (let item of response.data) {
                    deals.push({
                        id: item.id,
                        add_time: item.add_time,
                        update_time: item.update_time,
                        title: item.title,
                        value: item.value,
                        org_id: {
                            name: item.org_id.name,
                            cc_email: item.org_id.cc_email,
                        }
                    })
                }
            }            
        } catch (err) {
            throw new AppError('error to get deals', 400);
        }

        return deals
    }    
}

export default GetAllDealsService;