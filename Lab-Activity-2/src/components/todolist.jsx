import React from "react";
import './todolist.css';

export default class ToDoList extends React.Component {
    render() {
        return(
            <section class="pricing-section">
        <div class="container">
            <div class="sec-title text-center">
                <h2>ToDo List</h2>
            </div>

            <div class="outer-box">
                <div class="row">
                    <div class="pricing-block col-lg-4 wow fadeInUp">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><svg xmlns="http://www.w3.org/2000/svg" height="60"  viewBox="0 0 576 512"><path fill="#40cbb4" d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"/></svg></div>
                            </div>
                            <div class="price-box">
                                <div class="title"> Morning</div>
                                <h4 class="price">Clean <br></br>Porch</h4>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-block col-lg-4 wow fadeInUp" data-wow-delay="400ms">
                        <div class="inner-box">
                            <div class="icon-box">
                            <div class="icon-outer"><svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 512 512"><path fill="#1d95d2" d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM416 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 160c0 27.6-11.7 52.5-30.4 70.1C422.1 275.7 448 310.8 448 352c0 53-43 96-96 96H160c-53 0-96-43-96-96s43-96 96-96h88.4c-15.2-17-24.4-39.4-24.4-64H96c-53 0-96 43-96 96V416c0 53 43 96 96 96H416c53 0 96-43 96-96V288c0-53-43-96-96-96zM160 288c-35.3 0-64 28.7-64 64s28.7 64 64 64H352c35.3 0 64-28.7 64-64s-28.7-64-64-64H320 160z"/></svg></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Afternoon</div>
                                <h4 class="price">Wash <br></br> Car</h4>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-block col-lg-4  wow fadeInUp" data-wow-delay="800ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 448 512"><path fill="#ffc20b" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Evening</div>
                                <h4 class="price">Attend BCHAIN Class</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}