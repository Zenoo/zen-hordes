<?php

// URL of the remote RecipeDataService.php file
$remoteUrl = 'https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/packages/myhordes-fixtures/src/templates/Service/RecipeDataService.php';

// Local path to save the fetched RecipeDataService.php file
$localFilePath = __DIR__ . '/data/RecipeDataService.php';

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
class Recipe
{
    const WorkshopType = 1;
    const WorkshopTypeShamanSpecific = 2;
    const WorkshopTypeTechSpecific = 3;
    const ManualOutside = 11;
    const ManualInside = 12;
    const ManualAnywhere = 13;
}

CLASS;

$fileContents = preg_replace('/(namespace\s+[^;]+;\s*)/', '$1' . $dropModClass, $fileContents);

// Save the modified contents back to the file
file_put_contents($localFilePath, $fileContents);


// Include the fetched RecipeDataService.php file
require_once $localFilePath;

use MyHordes\Fixtures\Service\RecipeDataService;

// Initialize the data array
$data = [];

// Create an instance of RecipeDataService
$recipeDataService = new RecipeDataService();

// Process the data
$recipeDataService->process($data);

// Convert the data array to JSON
$json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Define the output file path
$outputFilePath = __DIR__ . '/data/recipes.json';

// Write the JSON to a file
file_put_contents($outputFilePath, $json);

echo "JSON data has been exported to $outputFilePath\n";
