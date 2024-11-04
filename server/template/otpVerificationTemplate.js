const otpVerificationTemplate = (otp) => {
    return ` <body>
    <style>
        .container{
          display:flex;
          justify-content:center;
          align-items:center;
          min-height:100vh;
          width: 100%;
          flex-flow: column;  
          text-align: center;
          box-sizing: border-box;
          color: #36393b;
        }

        .otp{
            
            font-size: 30px;
            
            color: #7AA5C6;
            letter-spacing: 30px;
            min-width: 100svw;
            background-color: #36393b;
            padding: 20px 0px;
            margin: 20px 0px;
        }

      </style>
      <div class='container'>
        <h1>This is Mail From E-talk</h1>
        <h2>Your OTP for Verification is: </h2>
        <div class='otp'>${otp}</div>
        <strong>Please don't share this <i>OTP</i> with anybody as it can be use for malicious acitivities.</strong>
        <small>If this is not related to You please Ignore this email.</small>
      </div>
</body>`;
  };
  
  module.exports = otpVerificationTemplate;
  