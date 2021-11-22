<template>
  <v-stepper class="mx-auto" outlined max-width="1000" v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Current Habits
      </v-stepper-step>

      <v-stepper-step :complete="e1 > 2" step="2">
        Exercise Expectations
      </v-stepper-step>

      <v-stepper-step step="3">
        Fitness Goals
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mx-auto">
            <v-card-title style="word-break: break-word;">
            <h2>
                In the past month, how regularly have you been exercising each week?
            </h2>
                
            <v-spacer></v-spacer>
            </v-card-title>

            <v-card-text>
                *Includes work outs at the gym, at home, outdoors or at a studio
            </v-card-text>

            <v-card-text>
                <v-chip-group center-active column v-model="selection_1" active-class="primary--text" mandatory>
                    <v-chip outlined pill class="ma-2" color="primary" x-large v-for="question in question_1_choices" :key="question" :value="question">
                        {{ question }}
                    </v-chip>
                </v-chip-group>
            </v-card-text>

            <v-card-actions class="d-flex justify-center">
                <v-btn color="primary" @click="e1 = 2">
                    Next Question
                    <v-icon dark right>
                        mdi-arrow-right
                    </v-icon>
                </v-btn>
            </v-card-actions>

            
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mx-auto">
            <v-card-title style="word-break: break-word;">
            <h2 class="text-h4">
                How often would you like to work out?
            </h2>
            <v-spacer></v-spacer>
            </v-card-title>

            <v-card-text>
            *Your coach will use this to design a plan for you
            </v-card-text>


            <v-card-text>
                <v-chip-group center-active column v-model="selection_2" active-class="primary--text" mandatory>
                    <v-chip outlined pill class="ma-2" color="primary" x-large v-for="question_2 in question_2_choices" :key="question_2" :value="question_2">
                        {{ question_2 }}
                    </v-chip>
                </v-chip-group>
            </v-card-text>

            <v-card-actions class="d-flex justify-center">
                <v-btn @click="e1 = 1">
                    <v-icon dark left>
                        mdi-arrow-left
                    </v-icon>
                    Back
                </v-btn>

                <v-btn color="primary" @click="e1 = 3">
                    Next Question
                    <v-icon dark right>
                        mdi-arrow-right
                    </v-icon>
                </v-btn>
            </v-card-actions>

            
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mx-auto" max-width="1000" max-height="900">
            <v-card-title style="word-break: break-word;">
            <h2 class="text-h4">
                What is your key fitness goal?
            </h2>
            <v-spacer></v-spacer>
            </v-card-title>

            <v-card-text>
            *Don't worry, you can share other goals with your trainer!
            </v-card-text>


            <v-card-text>
                <v-chip-group column center-active v-model="selection_3" active-class="primary--text" mandatory>
                    <v-chip outlined pill class="ma-2" color="primary" x-large v-for="question_3 in question_3_choices" :key="question_3" :value="question_3">
                        {{ question_3 }}
                    </v-chip>
                </v-chip-group>
            </v-card-text>

            <v-card-actions class="d-flex justify-center">
                <v-btn @click="e1 = 2">
                    <v-icon dark left>
                        mdi-arrow-left
                    </v-icon>
                    Back
                </v-btn>

                <v-btn color="primary" @click="Submit">
                    Submit
                    <v-icon dark right>
                        mdi-checkbox-marked-circle
                    </v-icon>
                </v-btn>
            </v-card-actions>

            
        </v-card>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        selection_1: '',
        question_1_choices: [
            '5 - 7 Days', '3 - 4 Days', '1 - 2 Days', '0 - 1 Days',
        ],
        selection_2: '',
        question_2_choices: [
            '5 + Days', '4 - 5 Days', '3 - 4 Days', '2 - 3 Days',
        ],
        selection_3: '',
        question_3_choices: [
            'Get Active', 'Get Stronger', 'Get Leaner', 'Improve Overall Health & Fitness', 'Sweat & Have Fun!', 'Stretch & Recover',
        ],
      }
    },
    methods: {
        Submit() {
            console.log("SUBMITTED")
            console.log(this.selection_3)
            console.log("DONE")
            this.$router.push('output')
            console.log("DONE TWICE")
        }
    },
  }
</script>