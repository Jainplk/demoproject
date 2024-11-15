import React from "react";
import getImageUrl from "../utils";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={`container-md ${styles.container}`}>
        <div className={`row ${styles.content1}`}>
          <div className={`col-lg-3 col-sm-12 ${styles.column1}`}>
            <div className={styles.logo}>
              <img src={getImageUrl("logo.svg")} alt="logo" />
            </div>
            <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>
            <ul className={styles.socialmedialist1}>
              <li>
                <i className="fa-brands fa-x-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-square-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
            </ul>
            <hr />
            <ul className={styles.socialmedialist2}>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
              </li>
              <li>
                <i className="fa-brands fa-telegram"></i>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-12">
            <ul className={styles.companyList}>
              <p className={styles.heading}>Company</p>
              <li>About</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Referral programme</li>
              <li>Careers</li>
              <li>Zerodha.tech</li>
              <li>Press & media</li>
              <li>Zerodha Cares (CSR)</li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-12">
            <ul className={styles.companyList}>
              <p className={styles.heading}>Support</p>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>Z-Connect blog</li>
              <li>List of charges</li>
              <li>Downloads & resources</li>
              <li>Videos</li>
              <li>Market overview</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-12">
            <ul className={styles.companyList}>
              <p className={styles.heading}>Account</p>
              <li>Open an account</li>
              <li>Fund transfer</li>
            </ul>
          </div>
        </div>

        <div className={`row ${styles.content2}`}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <a href="#">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className={styles.footerLink}>
            <ul>
                <li>NSE</li>
                <li>BSE</li>
                <li>MCX</li>
                <li>Terms & conditions</li>
                <li>Policies & procedures </li>
                <li>Privacy policy</li>
                <li>Disclosure </li>
                <li>For investor's attention </li>
                <li>Investor charter</li>
            </ul>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
