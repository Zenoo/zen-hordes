<?php

// URL of the remote RuinDataService.php file
$remoteUrl = 'https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/packages/myhordes-fixtures/src/templates/Service/RuinDataService.php';

// Local path to save the fetched RuinDataService.php file
$localFilePath = __DIR__ . '/data/RuinDataService.php';

// Fetch the remote file and save it locally
file_put_contents($localFilePath, file_get_contents($remoteUrl));

// Read the contents of the fetched file
$fileContents = file_get_contents($localFilePath);

// Remove lines starting with 'use'
$fileContents = preg_replace('/^use\s.*;\s*$/m', '', $fileContents);

// Remove 'implements' from the class declaration
$fileContents = preg_replace('/implements\s+\w+\s*/', '', $fileContents);

// Add DropMod class after the namespace declaration
$dropModClass = <<<'CLASS'

enum DropMod: int {
    case Infective = 51;
    case EventEaster = 101;
    case EventChristmas = 102;
    case EventChristmasAlt1 = 1021;
    case EventChristmasAlt2 = 1022;
    case EventStPatrick = 103;
    case EventHalloween = 104;
}

CLASS;

$fileContents = preg_replace('/(namespace\s+[^;]+;\s*)/', '$1' . $dropModClass, $fileContents);

// Save the modified contents back to the file
file_put_contents($localFilePath, $fileContents);


// Include the fetched RuinDataService.php file
require_once $localFilePath;

use MyHordes\Fixtures\Service\RuinDataService;

// Initialize the data array
$data = [];

// Create an instance of RuinDataService
$ruinDataService = new RuinDataService();

// Process the data
$ruinDataService->process($data);

// Convert the data array to JSON
$json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Define the output file path
$outputFilePath = __DIR__ . '/data/mainRepoRuins.json';

// Write the JSON to a file
file_put_contents($outputFilePath, $json);

echo "JSON data has been exported to $outputFilePath\n";
