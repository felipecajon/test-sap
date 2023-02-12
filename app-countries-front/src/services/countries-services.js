// import axios from 'axios';
// import { destination } from '../providers/destination.provider';

// export class ContryService {
//   async getCountries(lang) {
//     return new Promise((resolve, reject) => {
//       destination
//         .then((destinationObject) => {
//           const url = destinationObject.url + '/api/countries?lang=' + lang;
//           console.log('URL: ' + url);

//           this.httpService(url)
//             .then((data) => {
//               console.log('DEU BOA!');
//               resolve(data);
//             })
//             .catch((error) => {
//               console.log('DEU RUIM 1!');
//               reject(error.response.data);
//             });
//         })
//         .catch((err) => {
//           console.log('DEU RUIM 2!');
//           reject(err);
//         });
//     });
//   }

//   async httpService(url, header = 'ssds') {
//     try {
//       const request = await axios.get(url);
//       return request;
//     } catch (error) {
//       throw error;
//     }
//   }
// }
