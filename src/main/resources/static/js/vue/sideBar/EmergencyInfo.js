export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {},
  template: `
      <br/>
      <div class="turn_items appointment_header">
        <div class="emergency_wrapper">
          <div class="emergency">
            <div class="radius_wrapper emergency_item_wrapper">
              <div class="carousel_item">
                <img src="/images/emergency.png" alt="Patients" style="width: 20vw;">
              </div><br/>
              <div class="carousel_item text-center">
                <h3 class="text-white">Emergency?</h3>
                <h3 class="text-white">We can help you!</h3>
              </div>
            </div>
            <br/>

            <div class="radius_wrapper emergency_item_wrapper2">
              <div class="alert">
                <img src="/images/alert_9418835.png" alt="Patients" style="width: 11vw;">
              </div><br/>
              <div class="carousel_item text-center">
                <h3 class="text-white"><b>Emergency?</b><br/><br/>
                <b>Medical Service: 112</b><br/><br/>
                <div class="emergency_text_wrapper">KV-Notarztdienst (Emergency doctor service provided by health insurance): 116 117
                Poison Emergency Call: +49 361 – 730730
                University of Leipzig Medical Center (24/7):
                +49 341 – 97 109
                Emergency Department University of Leipzig Medical Center
                +49 341 –  97 17800
                Paul-List-Straße 27
                04103 Leipzig
                </div>
              </div><br/>
            </div>
          </div>
        </div>
      
      `,
};
