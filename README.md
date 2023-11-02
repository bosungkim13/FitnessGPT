# FitnessGPT 🏋🏻‍♂️

### Description 📖

Using GPT-4, create a scientifically-backed, personalized workout plan for you! Let's get those gains!

FitnessGPT is able to scrape information off of websites inputted to get information about recent studies and use that as information for GPT-4 to generate scientifically backed workouts.

Uses SvelteKit on the frontend as a form generation!

### Disclaimer ⚠️

This is just a fun project. The code is still a bit messy!

### Todos ☑

- [ ] Clean up code a little bit
- [ ] Create a better UI
- [ ] Upload to a server to allow for users to use it.
- [ ] Allow for streaming to simulate a request going much faster.

### Installation ⚙️

Make sure you have these installed:

- Docker
- A BrightData Account
  - This is used as a proxy during webscraping so I don't get banned off my school wifi
- An OpenAI API Key
  - If you don't have access to GPT-4, you can probably get away with the GPT-3.5 Turbo API Key

Then run the following commands:

```bash
git clone https://github.com/bosungkim13/FitnessGPT
```

```bash
cd FitnessGPT
```

```bash
docker compose up --build
```

The first time you run this, it will take a while to build the docker image. You will need to configure your BrightData proxy to spit out a file. Call this: `brightdata.json` and place it in the root of the project. This will be the settings for your proxy to connect.

### Feedback

Feel free to submit an issue by emailing me at bosungkim1712@gmail.com or bk39@rice.edu!
