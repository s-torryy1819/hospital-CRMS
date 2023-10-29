import TaxCalculator from './TaxCalculator.js';
import ShowData from './ShowData.js';

export default {
    components: {
        TaxCalculator,
        ShowData
    },
    data() {
        return {
            allPages: ['CalculateTax', 'ShowData'],
            activePage: 'CalculateTax'
        }
    },
    methods: {

    },
    template: `
    <br/>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-info" :class="activePage === page ? 'active' : ''" v-for="page in allPages" @click="activePage = page">
            <input type="radio" name="allPages" :id="page" />
            {{page}}
        </label>
    </div>
    
    <tax-calculator v-if="activePage === 'CalculateTax'"></tax-calculator>
    <show-data v-if="activePage === 'ShowData'"></show-data>
    
    `
}