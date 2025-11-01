<template>
    <main class="main">
         <!-- Contact Section -->
        <section id="contact" class="contact section light-background">

        <!-- Section Title -->
        <div class="container section-title">
            <h2>Contact</h2>
            <p>If you have inquiry please contact to me via email address as below.</p>
        </div><!-- End Section Title -->

        <div class="container" >

            <div class="row gy-4">

            <div class="col-lg-5">

                <div class="info-wrap">
                <div class="info-item d-flex" >
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                    <h3>Address</h3>
                    <p>No.79, Street Kampuchea Krom Blvd (128), Phnom Penh 12251</p>
                    </div>
                </div><!-- End Info Item -->

                <div class="info-item d-flex" >
                    <i class="bi bi-telephone flex-shrink-0"></i>
                    <div>
                    <h3>Call Us</h3>
                    <p>+855 86629792</p>
                    </div>
                </div><!-- End Info Item -->

                <div class="info-item d-flex" >
                    <i class="bi bi-envelope flex-shrink-0"></i>
                    <div>
                    <h3>Email Us</h3>
                    <p>dom48489@gmail.com</p>
                    </div>
                </div><!-- End Info Item -->

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.3307490331918!2d104.91422897318289!3d11.569152044075635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095127681ddaff%3A0xe7a6d05c6964187d!2sShinhan%20Bank%20Head%20Office!5e1!3m2!1sen!2skh!4v1761968934296!5m2!1sen!2skh%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade" frameborder="0" style="border:0; width: 100%; height: 270px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div class="col-lg-7">
                <form action="forms/contact.php" method="post" class="php-email-form" >
                <div class="row gy-4">

                    <div class="col-md-6">
                    <label for="name-field" class="pb-2">Your Name</label>
                    <input type="text" name="name" id="name-field" class="form-control" required>
                    </div>

                    <div class="col-md-6">
                    <label for="email-field" class="pb-2">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email-field" required>
                    </div>

                    <div class="col-md-12">
                    <label for="subject-field" class="pb-2">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject-field" required>
                    </div>

                    <div class="col-md-12">
                    <label for="message-field" class="pb-2">Message</label>
                    <textarea class="form-control" name="message" rows="10" id="message-field" required></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Send Message</button>
                    </div>

                </div>
                </form>
            </div><!-- End Contact Form -->

            </div>

        </div>

        </section><!-- /Contact Section -->
    </main>
</template>