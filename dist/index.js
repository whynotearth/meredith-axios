// Add default options
export const serviceOptions = {};
// Instance selector
export function axios(configs, resolve, reject) {
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
export function getConfigs(method, contentType, url, options) {
    const configs = Object.assign({}, options, { method, url });
    configs.headers = Object.assign({}, options.headers, { 'Content-Type': contentType });
    return configs;
}
export class ListResultDto {
}
export class PagedResultDto {
}
// customer definition
// empty
export class BrowtricksService {
    /**
     *
     */
    static profile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/profile';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static tenants(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ClientService {
    /**
     *
     */
    static archive(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}/archive';
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static clients(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static clients1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { Query: params['query'], Page: params['page'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static clients2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}';
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static clients3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}';
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ClientNoteService {
    /**
     *
     */
    static notes(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}/notes';
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static notes1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}/notes';
            url = url.replace('{clientId}', params['clientId'] + '');
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
    static notes2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}/notes/{noteId}';
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{noteId}', params['noteId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static notes3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}/notes/{noteId}';
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{noteId}', params['noteId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static notes4(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/clients/{clientId}/notes/{noteId}';
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{noteId}', params['noteId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class FormAnswerService {
    /**
     *
     */
    static notify(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}/notify/{clientId}';
            url = url.replace('{templateId}', params['templateId'] + '');
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { callbackUrl: params['callbackUrl'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static preview(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}/answer/preview';
            url = url.replace('{templateId}', params['templateId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static preview1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}/preview/{clientId}';
            url = url.replace('{templateId}', params['templateId'] + '');
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static pdf(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}/preview/pdf';
            url = url.replace('{templateId}', params['templateId'] + '');
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
    static png(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}/preview/png';
            url = url.replace('{templateId}', params['templateId'] + '');
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
    static answer(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}/answer/{clientId}';
            url = url.replace('{templateId}', params['templateId'] + '');
            url = url.replace('{clientId}', params['clientId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class FormTemplateService {
    /**
     *
     */
    static formtemplates(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static formtemplates1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates';
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
    static defaults(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/defaults';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static formtemplates2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}';
            url = url.replace('{templateId}', params['templateId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static formtemplates3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{templateId}', params['templateId'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static formtemplates4(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/formtemplates/{templateId}';
            url = url.replace('{templateId}', params['templateId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TenantMediaService {
    /**
     *
     */
    static images(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/media/images';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static videos(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/media/videos';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static images1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/media/images/{imageId}';
            url = url.replace('{imageId}', params['imageId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static videos1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/browtricks/tenants/{tenantSlug}/media/videos/{videoId}';
            url = url.replace('{videoId}', params['videoId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
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
export class PlanetCollageService {
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
}
export class AuthenticationService {
    /**
     *
     */
    static changepassword(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/changepassword';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static confirmemail(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/confirmemail';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static confirmphone(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/confirmphone';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static forgotpassword(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/forgotpassword';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static forgotpasswordreset(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/forgotpasswordreset';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
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
    static ping(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/ping';
            const configs = getConfigs('get', 'application/json', url, options);
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
    static confirmemailtoken(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/confirmemailtoken';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static confirmphonetoken(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/authentication/confirmphonetoken';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
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
export class EmailsService {
    /**
     *
     */
    static stats(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/emails/{companySlug}/stats';
            url = url.replace('{companySlug}', params['companySlug'] + '');
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
    /**
     *
     */
    static slug1(params = {}, options = {}) {
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
    static slug2(params = {}, options = {}) {
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
}
export class PaymentMethodService {
    /**
     *
     */
    static paymentmethods(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/paymentmethods';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static paymentmethods1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/paymentmethods';
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
    static paymentmethods2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/paymentmethods/{id}';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{id}', params['id'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static payments(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/paymentmethods/payments';
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
    static stripe(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/paymentmethods/stripe';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ProfileService {
    /**
     *
     */
    static profile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/profile';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static profile1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/profile';
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class SubscriptionService {
    /**
     *
     */
    static domain(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/subscriptions/domain/{domain}';
            url = url.replace('{domain}', params['domain'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static cancel(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/subscriptions/cancel';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static changepaymentmethod(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/subscriptions/changepaymentmethod';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static subscriptions(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/subscriptions';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static subscriptions1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/subscriptions';
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
    static payments(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/tenant/{tenantSlug}/subscriptions/payments';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class UrlShortenerService {
    /**
     *
     */
    static shortener(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shortener/{id}';
            url = url.replace('{id}', params['id'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ProductCategoryService {
    /**
     *
     */
    static categories(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/tenant/{tenantSlug}/categories';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static categories1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/tenant/{tenantSlug}/categories';
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
    static categories2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/tenant/{tenantSlug}/categories/{categoryId}';
            url = url.replace('{categoryId}', params['categoryId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static categories3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/tenant/{tenantSlug}/categories/{categoryId}';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{categoryId}', params['categoryId'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static categories4(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/tenant/{tenantSlug}/categories/{categoryId}';
            url = url.replace('{categoryId}', params['categoryId'] + '');
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ProductService {
    /**
     *
     */
    static products(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/categories/{categoryId}/products';
            url = url.replace('{categoryId}', params['categoryId'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static products1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/categories/{categoryId}/products';
            url = url.replace('{categoryId}', params['categoryId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static products2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/categories/{categoryId}/products/{productId}';
            url = url.replace('{productId}', params['productId'] + '');
            url = url.replace('{categoryId}', params['categoryId'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static products3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/categories/{categoryId}/products/{productId}';
            url = url.replace('{productId}', params['productId'] + '');
            url = url.replace('{categoryId}', params['categoryId'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static products4(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/shop/categories/{categoryId}/products/{productId}';
            url = url.replace('{productId}', params['productId'] + '');
            url = url.replace('{categoryId}', params['categoryId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
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
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static tenants1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants';
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
    static owns(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/owns/{tenantSlug}';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
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
    static tenants2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/{tenantSlug}';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{companySlug}', params['companySlug'] + '');
            const configs = getConfigs('patch', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static tenants3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/{tenantSlug}';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
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
    static address(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/{tenantSlug}/address';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
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
    static address1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/{tenantSlug}/address';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{companySlug}', params['companySlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static mytenants(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/mytenants';
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
    static active(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/{tenantSlug}/active';
            url = url.replace('{tenantSlug}', params['tenantSlug'] + '');
            url = url.replace('{companySlug}', params['companySlug'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
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
export class UserService {
    /**
     *
     */
    static users(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/companies/{companySlug}/tenants/users';
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
    static users1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/users';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { Query: params['query'], Page: params['page'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static users2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/users/{userId}';
            url = url.replace('{userId}', params['userId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static resetPassword(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/users/{userId}/resetPassword';
            url = url.replace('{userId}', params['userId'] + '');
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ArticleCategoryService {
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
export class ArticleService {
    /**
     *
     */
    static articles(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/articles';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static articles1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/articles/{articleId}';
            url = url.replace('{articleId}', params['articleId'] + '');
            const configs = getConfigs('delete', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static articles2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/articles/{articleId}';
            url = url.replace('{articleId}', params['articleId'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class DistributionGroupService {
    /**
     *
     */
    static recipients(params = {}, options = {}) {
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
    static recipients1(params = {}, options = {}) {
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
    static recipients2(params = {}, options = {}) {
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
    /**
     *
     */
    static recipients3(params = {}, options = {}) {
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
    static export(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/{distributionGroupName}/export';
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
    static export1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/{distributionGroupName}/stats/export';
            url = url.replace('{distributionGroupName}', params['distributionGroupName'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static distributiongroups(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups';
            const configs = getConfigs('put', 'multipart/form-data', url, options);
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
            let url = '/api/v0/volkswagen/distributiongroups/{distributionGroupName}/stats';
            url = url.replace('{distributionGroupName}', params['distributionGroupName'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static stats1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/distributiongroups/stats';
            const configs = getConfigs('get', 'application/json', url, options);
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
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static dailyplan(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/jumpstart/dailyplan';
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
            let url = '/api/v0/volkswagen/jumpstart/{jumpStartId}/stats';
            url = url.replace('{jumpStartId}', params['jumpStartId'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static preview(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/jumpstart/{date}/preview';
            url = url.replace('{date}', params['date'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { articleIds: params['articleIds'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static stats1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/jumpstart/stats';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
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
    /**
     *
     */
    static export(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/memos/overallstats/export';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static overallstats(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/memos/overallstats';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static stats1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/memos/stats';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class NewJumpStartService {
    /**
     *
     */
    static newjumpstart(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/newjumpstart';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static newjumpstart1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/newjumpstart';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static newjumpstart2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/newjumpstart/{id}';
            url = url.replace('{id}', params['id'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static export(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/newjumpstart/stats/export';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
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
            let url = '/api/v0/volkswagen/newjumpstart/stats';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static stats1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/newjumpstart/{id}/stats';
            url = url.replace('{id}', params['id'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static export1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/newjumpstart/{id}/stats/export';
            url = url.replace('{id}', params['id'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { fromDate: params['fromDate'], toDate: params['toDate'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class SettingsService {
    /**
     *
     */
    static settings(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/settings';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     *
     */
    static settings1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/api/v0/volkswagen/settings';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params.body;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["cash"] = "cash";
    PaymentMethodType["abaBankTransfer"] = "abaBankTransfer";
})(PaymentMethodType || (PaymentMethodType = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType["email"] = "email";
    NotificationType["whatsapp"] = "whatsapp";
    NotificationType["text"] = "text";
})(NotificationType || (NotificationType = {}));
export var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["sunday"] = "sunday";
    DayOfWeek["monday"] = "monday";
    DayOfWeek["tuesday"] = "tuesday";
    DayOfWeek["wednesday"] = "wednesday";
    DayOfWeek["thursday"] = "thursday";
    DayOfWeek["friday"] = "friday";
    DayOfWeek["saturday"] = "saturday";
})(DayOfWeek || (DayOfWeek = {}));
export var FormItemType;
(function (FormItemType) {
    FormItemType["text"] = "text";
    FormItemType["agreement_request"] = "agreement_request";
    FormItemType["text_response"] = "text_response";
    FormItemType["checklist"] = "checklist";
    FormItemType["multiple_choice"] = "multiple_choice";
    FormItemType["image"] = "image";
    FormItemType["pdf"] = "pdf";
})(FormItemType || (FormItemType = {}));
