import React from "react";
import './booklist.css';

export default class BookList extends React.Component {
    render() {
        return(
            <section class="pricing-section">
        <div class="container">
            <div class="sec-title text-center">
                <h2>Book List</h2>
            </div>

            <div class="outer-box">
                <div class="row">
                    <div class="pricing-block col-lg-4 wow fadeInUp">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><svg class="gun" xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 0 576 512"><path fill="#40cbb4" d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H32C14.3 64 0 78.3 0 96V208c0 17.7 14.3 32 32 32H42c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352H321.4c23.7 0 44.8-14.9 52.7-37.2L400.9 240H432c8.5 0 16.6-3.4 22.6-9.4L477.3 208H544c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H528V56zM321.4 304H229l16-64h105l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></div>
                            </div>
                            <div class="price-box">
                                <div class="title"> Genre: Action</div>
                                <h4 class="price">Divergent</h4>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-block col-lg-4 wow fadeInUp" data-wow-delay="400ms">
                        <div class="inner-box">
                            <div class="icon-box">
                            <div class="icon-outer"><svg class='ghost' xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 384 512"><path fill="#1d95d2" d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Genre: Horror</div>
                                <h4 class="price">Dracula</h4>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-block col-lg-4  wow fadeInUp" data-wow-delay="800ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><svg class='love' xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 512 512"><path fill="#ffc20b" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Genre: Love Story</div>
                                <h4 class="price">Indigo</h4>
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