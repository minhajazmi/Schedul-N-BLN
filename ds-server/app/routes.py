from crypt import methods

from flask import request
from itsdangerous import json
from app import app

@app.route('/api/process', methods=['POST'])
def processData():
    data = request.json
    return get_TM_type(data)

"""
Created on Sun Jan 30 17:55:09 2022

@author: xinhao

This function convert user input (23 question, 5 option) into time management (TM) types

Input:  - .json file of user TM questionnaire answer
Output: - a dictionary object containing the name of the TM type, e.g., 
        {'TM_type':'Hooper'}, {'TM_type':'Perfectionist'}, {'TM_type':'Implusive'},
        {'TM_type':'Cliff hanger'}, {'TM_type':'Big idea'}, {'TM_type':'Hyperfocus'}
"""

# get TM_type.py

def get_TM_type(user_answers):
    
    #%% import libraries
    # This is the convention used to import Pandas.
    import pandas as pd
    import numpy as np
  #  import json

    #%% load data
    # These commands load the survey data 
    
    # convert dictionary to DataFrame
    df = pd.DataFrame([user_answers])
    
    
    #%% data feature
    
    type_data = df.iloc[:,0:24];
    
    #%% define data cleaning function
    
    
    def text_to_score(a):
         if a == "completelyDisagree":
             return 1
         elif a == "IDisagree":
             return 2
         elif a == "neutral":
             return 3
         elif a == "IAgree":
             return 4
         elif a == "completelyAgree":
             return 5 
    
    
    #%% data cleaning      
    
    type_num_data = type_data.applymap(text_to_score)
    
    
    #%% calculate the average score for each type (23 question FINAL version)
    # hooper        = (Q1 + Q4 + Q6 + Q14 + Q16 + (6 - Q19)) / 6 - 3
    # Perfectionist = (Q2 + Q5 + Q7 + Q9 + Q15 + (6 - Q17)) / 6 - 3
    # cliff_hanger  = (Q12 + Q20 + Q21 + Q22 + (6 - Q8)) / 5 - 3
    # impulsive     = (Q3 + Q4 + Q16 + Q18 + (6 - Q10)) / 5 - 3
    # big_idea      = (Q11 + Q21 + Q23 + (6 - Q7)) / 4 - 3
    # hyperfocus    = (Q7 + Q13 + Q24 + (6 - Q1) + (6 - Q6)) / 5 - 3
    
    type_num_data['hopper_score'] = (type_num_data.iloc[0,0] + type_num_data.iloc[0,3]  
        + type_num_data.iloc[0,5] + type_num_data.iloc[0,13] + type_num_data.iloc[0,15] 
        + (6 - type_num_data.iloc[0,18])) / 6 - 3
    
    type_num_data['perfectionist_score'] = (type_num_data.iloc[0,1] + type_num_data.iloc[0,4]  
        + type_num_data.iloc[0,6] + type_num_data.iloc[0,8] + type_num_data.iloc[0,14] 
        + (6 - type_num_data.iloc[0,16])) / 6 - 3
    
    type_num_data['cliff_hanger_score'] = (type_num_data.iloc[0,11] + type_num_data.iloc[0,19]  
        + type_num_data.iloc[0,20] + type_num_data.iloc[0,21] 
        + (6 - type_num_data.iloc[0,7])) / 5 - 3
    
    type_num_data['impulsive_score'] = (type_num_data.iloc[0,2] + type_num_data.iloc[0,3]  
        + type_num_data.iloc[0,15] + type_num_data.iloc[0,17] 
        + (6 - type_num_data.iloc[0,9])) / 5 - 3
        
    type_num_data['big_idea_score'] = (type_num_data.iloc[0,10] + type_num_data.iloc[0,20]  
        + type_num_data.iloc[0,22] + (6 - type_num_data.iloc[0,6])) / 4 - 3
    
    type_num_data['hyperfocus_score'] = (type_num_data.iloc[0,6] + type_num_data.iloc[0,12]  
        + type_num_data.iloc[0,23] + (6 - type_num_data.iloc[0,0]) 
        + (6 - type_num_data.iloc[0,5])) / 5 - 3
    
    #%% get the result from the average score
    
    all_scores = [type_num_data['hopper_score'][0], type_num_data['perfectionist_score'][0], 
                  type_num_data['cliff_hanger_score'][0], type_num_data['impulsive_score'][0], 
                  type_num_data['big_idea_score'][0], type_num_data['hyperfocus_score'][0]]
    
    #define conditions
    conditions = [type_num_data['hopper_score'][0] == max(all_scores), 
                  type_num_data['perfectionist_score'][0] == max(all_scores),
                  type_num_data['cliff_hanger_score'][0] == max(all_scores),
                  type_num_data['impulsive_score'][0] == max(all_scores),
                  type_num_data['big_idea_score'][0] == max(all_scores),
                  type_num_data['hyperfocus_score'][0] == max(all_scores)]
    
    #define choices
    choices = ['hopper', 'perfectionist', 'cliff hanger', 'impulsive', 'big idea', 'hyperfocus']
    
    #create new column in DataFrame that displays results of comparisons
    type_num_data['winner_type'] = np.select(conditions, choices, default='mixed type')
    

    #%% save TM type of user as a dictionary object
    
    user_TM_type = {
            'TM_type': type_num_data['winner_type'][0]
            }
    
    return user_TM_type
   