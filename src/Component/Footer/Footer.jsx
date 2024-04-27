import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";
import { Paper } from "@mui/material";
import { Google, Instagram, Twitter } from "@mui/icons-material";
import logo from "../images/icon.png"
const Footer = () => {
  return (
    <div>
      <div class=" my-5">
        <footer class="text-dark text-center text-lg-start bgfooter">
          <div class="container p-4">
            <div class="row mt-4">
            <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
              <img src={logo} className="col-8 ms-auto mx-auto"/>
            </div>
              <div class="col-lg-3 col-md-12 mb-2 mb-md-0">
                <h5 class="text-uppercase mb-2 iconclr">Links</h5>
                <ul class="fa-ul bullet">
                  <li class="">About</li>
                  <li class="">Our Technology</li>
                  <li class="">Blogs</li>
                  <li class="">Contact Us</li>
                  <li class="">Advance Manual Therapy Techniques</li>
                  <li class="">Gallery </li>

                  <li className='"mb-1'>Condition We Treat</li>
                </ul>

                <div class="m-4 ">
                  <a type="" class=" btn-floating  btn-lg m-2  iconclr">
                    <FacebookIcon className="iconclr1 fs-1" />
                  </a>

                  <a type="" class=" btn-floating  btn-lg m-2  iconclr">
                    <Instagram className="iconclr1 fs-1" />
                  </a>

                  <a type="" class=" btn-floating btn-lg m-2 iconclr1 iconclr">
                    <Twitter className="iconclr1 fs-1" />
                  </a>

                  <a type="" class=" btn-floating  btn-lg m-2 iconclr1 iconclr">
                    <Google className="iconclr1 fs-1" />
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4 pb-1 iconclr">Contact</h5>

                <ul class="fa-ul bullet">
                  <li class="mb-3">
                    <span>
                      <BusinessIcon className="iconclr" />
                    </span>
                    <span class="ms-2 ">
                      137, Ramachandra Rd, <br />
                      opp Best baby shop, R.S. Puram, <br />
                      Coimbatore, Tamil Nadu 641002
                    </span>
                  </li>
                  <li class="mb-3">
                    <span>
                      <EmailIcon className="iconclr" />
                    </span>
                    <span class="ms-2">info@headtotoe.in</span>
                  </li>
                  <li class="mb-3">
                    <span>
                      <PhoneIcon className="iconclr" />
                    </span>
                    <span class="ms-2">0422-2477557</span>
                  </li>
                  <li class="mb-3">
                    <span>
                      <PhoneIcon className="iconclr" />
                    </span>
                    <span class="ms-2">+91-78459-36105</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
  <h5 class="text-uppercase mb-4 iconclr">Opening hours</h5>
  {/* <table class="table text-center table-borderless ">
    <tbody class="font-weight-normal bg-primary">
      <tr>
        <td colspan="2">Monday - Saturday</td>
      </tr>
      <tr>
        <td>Morning</td>
        <td>9am - 1am</td>
      </tr>
      <tr>
        <td>Evening</td>
        <td>4pm - 8pm</td>
      </tr>
      <tr>
        <td colspan="2">Sunday</td>
      </tr>
      <tr>
        <td colspan="2">9am - 10pm</td>
      </tr>
    </tbody>
  </table> */}

  <div>
    <div><p>Monday-Saturday</p></div>
    <div><p>Morning - 9 Am to 1 Pm </p> </div>
    <div><p>Evening - 4 pm to 8 Pm </p> </div>
    <div><p>Sunday</p></div>
    <div><p> 9 Am to 10 Pm </p> </div>
  </div>
</div>

            </div>
          </div>

          <div
            class="text-center p-3 iconclr"
            style={{ backgroundColor: (0, 0, 0, 0.2) }}
          >
            © 2024 Copyright: &nbsp;
            <a class=" iconclr border-none" href="https://www.headtotoe.in/">
              {" "}
              www.head2toe.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
