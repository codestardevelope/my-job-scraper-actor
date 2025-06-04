const { Apify } = require('apify');

Apify.main(async () => {
    const input = await Apify.getInput();

    console.log('Received input:');
    console.log(`Job Title: ${input.jobTitle}`);
    console.log(`Location: ${input.location}`);
    console.log(`Notify Email: ${input.emailToNotify}`);

    await Apify.setValue('OUTPUT', {
        message: 'Input received successfully. Ready for Make.com integration.',
        input
    });
});
