// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

#![allow(unused_imports)]
#![allow(dead_code)]

// Include the bindings directly instead of autogenerating them
// at build time. This is because some systems may not have the
// required clang runtime libraries such as `libclangAST.so` etc
// that are used by `bindgen` to parse C and C++ headers.
// include!(concat!(env!("OUT_DIR"), "/hdfs-native.rs"));
include!("hdfs-native.rs");
