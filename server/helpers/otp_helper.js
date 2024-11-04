const express = require('express');
const nodeMailer = require('nodemailer');
require('dotenv').config();
const mailTemplate = require('../template/otpVerificationTemplate');



class OTP{
    #otp;
    #mail;
    constructor(){
        this.#mail = process.env.MAIL;
    }


    async send(reciever){
        this.#otp = this.#generateOTP(5);
        const emailTemplate = mailTemplate(this.#otp);
        const mail = {
            from: `E-Talk <${this.#mail}> `,
            to: reciever,
            subject: "Test Mail",
            text: 'testing mail',
            html: emailTemplate
        }
        const transporter = this.#transporter();

        try {
            await transporter.sendMail(mail);
            return this.#otp;
        } catch (error) {
            console.log(error);
        }
    }

    getOTP(){
        return this.#otp;
    }

    verify(otp){
        if(this.#otp === otp) return true;
        else return false;
    }



    #generateOTP(len){
        let otp= '';
        for(let i = 0; i< len ;i++){
            otp += Math.floor(Math.random()*10);
        }
        return otp;
    }

    #transporter(){
        return nodeMailer.createTransport({
            service: 'Outlook365',
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_PASSWORD  
            }
        })
    }
}

module.exports = OTP;