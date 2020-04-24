// Add default options
export const serviceOptions = {};
// Instance selector
function axios(configs, resolve, reject) {
    if (serviceOptions.axios) {
        return serviceOptions.axios
            .request(configs)
            .then(res => {
            resolve(res.data);
        })
            .catch(err => {
            reject(err);
        });
    }
    else {
        throw new Error('please inject yourself instance like axios  ');
    }
}
function getConfigs(method, contentType, url, options) {
    const configs = Object.assign({}, options, { method, url });
    configs.headers = Object.assign({}, options.headers, { 'Content-Type': contentType });
    return configs;
}
export class IList extends Array {
}
export class List extends Array {
}
export class ListResultDto {
}
export class PagedResultDto {
}
// customer definition
// empty
export class AuthenticationService {
    /**
     *
     */
    static login(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/login';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static logout(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/logout';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static login1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/provider/login';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { provider: params['provider'], returnUrl: params['returnUrl'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static logout1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/provider/logout';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { provider: params['provider'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static register(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/register';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static ping(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/ping';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class CardService {
    /**
     *
     */
    static related(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/cards/{id}/related';
            url = url.replace('{id}', params['id'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class CompanyService {
    /**
     *
     */
    static publishable(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companyId}/stripe/keys/publishable';
            url = url.replace('{companyId}', params['companyId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class DistributionGroupService {
    /**
     *
     */
    static distributiongroups(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static distributiongroups1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups';
            const configs = getConfigs('put', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static stats(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/stats';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static recipients(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/{distributionGroupName}/recipients';
            url = url.replace('{distributionGroupName}', params['distributionGroupName'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static recipients1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/{distributionGroupName}/recipients';
            url = url.replace('{distributionGroupName}', params['distributionGroupName'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static recipients2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/{distributionGroupName}/recipients/{recipientId}';
            url = url.replace('{recipientId}', params['recipientId'] + '');
            url = url.replace('{distributionGroupName}', params['distributionGroupName'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static recipients3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/{distributionGroupName}/recipients/{recipientId}';
            url = url.replace('{recipientId}', params['recipientId'] + '');
            url = url.replace('{distributionGroupName}', params['distributionGroupName'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class JumpStartService {
    /**
     *
     */
    static jumpstart(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/jumpstart';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { dateTime: params['dateTime'] };
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class MemoService {
    /**
     *
     */
    static memos(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/memos';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static memos1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/memos';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static stats(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/memos/{memoId}/stats';
            url = url.replace('{memoId}', params['memoId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class PageService {
    /**
     *
     */
    static slug(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/pages/slug/{companySlug}/{pageSlug}';
            url = url.replace('{companySlug}', params['companySlug'] + '');
            url = url.replace('{pageSlug}', params['pageSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static slug1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/pages/slug/{companySlug}/{tenantSlug}/{pageSlug}';
            url = url.replace('{companySlug}', params['companySlug'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{pageSlug}', params['pageSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static slug2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/pages/slug/{companySlug}';
            url = url.replace('{companySlug}', params['companySlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static byName(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/pages/slug/{companySlug}/categories/by-name/{categoryName}';
            url = url.replace('{companySlug}', params['companySlug'] + '');
            url = url.replace('{categoryName}', params['categoryName'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static landingpage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/pages/slug/{companySlug}/{pageSlug}/landingpage';
            url = url.replace('{companySlug}', params['companySlug'] + '');
            url = url.replace('{pageSlug}', params['pageSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class PlanetCollageService {
    /**
     *
     */
    static byTag(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/planetcollage/by-tag/{tag}';
            url = url.replace('{tag}', params['tag'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static full(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/planetcollage/full';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class PostService {
    /**
     *
     */
    static posts(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/posts';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static posts1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/posts';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { date: params['date'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static posts2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/posts/{postId}';
            url = url.replace('{postId}', params['postId'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static posts3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/posts/{postId}';
            url = url.replace('{postId}', params['postId'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class PostCategoryService {
    /**
     *
     */
    static categories(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/categories';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class PriceService {
    /**
     *
     */
    static prices(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/hotel/prices';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ProductsService {
    /**
     *
     */
    static categories(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenants/{tenantSlug}/categories';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static products(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenants/{tenantSlug}/categories/{categorySlug}/products';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{categorySlug}', params['categorySlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ReservationService {
    /**
     *
     */
    static reservations(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/hotel/reservations/{reservationId}';
            url = url.replace('{reservationId}', params['reservationId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static pay(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/hotel/reservations/{reservationId}/pay';
            url = url.replace('{reservationId}', params['reservationId'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static reserve(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/hotel/reservations/roomtype/{roomTypeId}/reserve';
            url = url.replace('{roomTypeId}', params['roomTypeId'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class RoomTypeService {
    /**
     *
     */
    static prices(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/hotel/roomtypes/{roomTypeId}/prices';
            url = url.replace('{roomTypeId}', params['roomTypeId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { startDate: params['startDate'], endDate: params['endDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TenantService {
    /**
     *
     */
    static tenants(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants';
            url = url.replace('{companySlug}', params['companySlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TenantReservationService {
    /**
     *
     */
    static reservations(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenants/{tenantSlug}/reservations';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
