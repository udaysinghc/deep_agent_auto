Feature: DeepAgent Functionality
  As a logged in user
  I want to access and view my dashboard
  So that I can see my personalized information and overview

  Background:
    Given the user enters username "testuser_Deepagent2@internalreai.com" and password "Testuser@123"
    Then I should be logged in successfully
    When I click the deep Agent option

  @DeepAgentHomePage @smoke
  Scenario: Check default prompt from the Deep Agent popup window and verify "Cancel" and "Try" buttons
    Given I click the check out from the welcome window
    When I open the Deep Agent default sample task
    Then I should see the Deep Agent popup window
    And I should see the Cancel and Try it buttons

  @DeepAgentDefaultSingleSampleTaskPPT @smoke
  Scenario Outline: Search a single default sample task from deep Agent
    Given I click the check out from the welcome window
     When I search for a default sample task and enter "Generate a downloadable PowerPoint pptx file that provides a general overview of all major benchmarks used to evaluate LLMs, across 10 slides"
    And I should see the status "Completed" for the task
    And the compute points should not exceed 150k
    And I should download the generated summary
    Then I should see the search results for the default sample task

  @DeepAgentSearchPrompt @smoke
  Scenario Outline: Search DeepAgent prompt
    Given I click the check out from the welcome window
    When I search the prompt "<promat_user_search>" with follow-up query "<follow_up_query>"
    And I should see the status "Completed" for the task
    And the compute points should not exceed 150k
    And I should download the generated summary
    And I should fetch the search results

    Examples:
      | promat_user_search                   | follow_up_query                       |
      | search Elon Musk and create pdf file | Elon Musk's life or career in the PDf |

  @DeepAgentDefaultAllSampleTask @regression
  Scenario Outline: Search a single default sample task from deep Agent
    Given I click the check out from the welcome window
    When I search for all default sample task "<sampleTaskName>" and enter "<Specify_the_prompat>"
    # And I should see the status "Completed" for the task
    # And the compute points should not exceed 150k
    # And I should download the generated summary
    # Then I should see the search results for the default sample task

    Examples:
      | sampleTaskName                           | Specify_the_prompat                                                                                                                         |
      | Technical report about MCP               | Model Context Protocol technical professional, 15 pages with detailed structure                                                             |
      | Website for a summer camp                | Make sure it has a nice, cool pastel color palette and focuses on classic romance                                                           |
      | Custom RAG chatbot                       | I want to name the chatbot DeepAgent and use calm colors like soft blue and green.                                                          |
      | MCP meets DeepAgent                      | It’s a software product, launching in 3 weeks, team of 6, budget is tight, and some initial research is done.                               |
      | Luxury trip to Bali                      | Luxury mid-range budget relaxation for next month                                                                                           |
      | Dinner reservations                      | Looking to book a table for 5 for Sunday lunch—do you have any availability around 12:30–1:30 PM?  create a file                            |
      | On-the-fly interactive Jira dashboard    | https://abacusai.atlassian.net/ — summarize all project high-priority tasks; dark grey theme with chat graph & icon                         |
      | Hot or Not - hollywood edition           | A mix of celebrities, about 20 to start, with a clean modern look using dark colors, and yes—show Hot vote percentages and a leaderboard.   |
      | Personal AI assistant                    | 9 AM to 5 PM, yes to breaks, avoid existing meetings, and title them “Focus Time                                                            |
      | DeepAgent + Slack to improve productivity| My Slack name is @johndoe, check last 2 days, focus on #team-updates and #project-alpha.                                                    |
      | Build a game                             | your call                                                                                                                                   |
