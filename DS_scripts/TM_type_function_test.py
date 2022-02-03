#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan 23 03:47:19 2022

@author: xinhao
"""

#%% call for the function to get user Time management type

user_answers = 'quizdata.json' # here the file name will be dependent on our real file name

from get_TM_type_as_Json import get_TM_type_as_Json

get_TM_type_as_Json(user_answers)

#%% save results to Github

#from github import Github
#
#token = "YOUR_TOKEN"
#
#repo = "bertrandmartel/test-repo"
#path = "data.json"
#
## if using username and password
##g = Github("user", "password")
#
#g = Github(token)
#
#data = open("data.json", "r").read()
#
#repo = g.get_repo(repo)
#repo.create_file(
#    path = path, 
#    message = "add new file", 
#    content = data, 
#    branch = "master"
#)
