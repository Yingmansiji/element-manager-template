<template>
  <div>
    <el-dialog
        class="small_dialog"
        :title="dialogTitle"
        :visible.sync="showDialog"
        @close="cancel('form')"
        :close-on-click-modal="false">
      <el-form :model="form" :rules="rules" ref="form" :label-width="formLabelWidth">
        <el-form-item label="城市" prop="cityId">
          <el-select
              v-model="form.cityId"
              placeholder="请选择城市"
              :disabled="cities.length===1"
              @change="changeCity">
            <el-option
                v-for="item in cities"
                :key="item.cityCode"
                :label="item.cityName"
                :value="item.cityCode"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类ID" prop="classId">
          <el-input
              v-model="form.classId"
              autocomplete="off"
              placeholder="保存后生成"
              style="width: 60%"
              disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="分类名称" prop="className">
          <el-input
              v-model="form.className"
              autocomplete="off"
              placeholder="请输入分类中文名称"
              style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类状态" v-if="editDetail.hasOwnProperty('id')" prop="classStatus">
          <el-switch
              @change="changeSwitch"
              v-model="form.classStatus"
              active-color="#13ce66"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel('form')">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')" :disabled="submitDisable">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "exampleDialog",
  props: ["dialogVisible", "editDetail"],
  data() {
    return {
      dialogTitle: "",
      showDialog: false,
      formLabelWidth: "120px",
      form: {
        cityId: "",
        // 分类id
        classId: "",
        // 分类名称
        className: "",
        // 分类状态
        classStatus: true
      },
      cities: [],
      rules: {
        cityId: [
          {required: true, message: "请选择城市", trigger: blur}
        ],
        className: [
          {required: true, message: "请输入知识库分类名称", trigger: blur}
        ]
      },
      submitDisable: false //防重复提交
    }
  },
  methods: {
    //获取当前城市
    async getCity() {
      let result = await this.$api.getCity()
      if (result.code === 200) {
        this.cities = result.data;
        this.$store.commit('cityList', this.cities);
        this.form.cityId = this.$store.state.cityCode === "" ? this.cities[0].cityCode : this.$store.state.cityCode;
      } else {
        this.cities = this.$store.state.cityList;
        this.form.cityId = this.$store.state.cityCode
      }
    },
    // 切换城市-当返回城市的数据多于一条
    changeCity(val) {
      this.form.cityId = val;
    },
    // 修改分类状态
    async changeSwitch(val) {
      let param = {
        kindId: this.form.classId,
        state: val,
      };
      console.log(param)
      // libraryStatusChange
      let result = await this.$api.libraryStatusChange(param);
      if (result.code === 200) {
        this.$message({message: result.message, center: true, type: "success"})
      } else {
        this.$message({message: result.message, center: true, type: "error"})
      }
    },
    // 确认新增/编辑表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitDisable = true;
          let param = {}
          if (this.form.classId === "") {
            // 新增
            param = {
              cityId: this.form.cityId,
              kindName: this.form.className
            }
            this.addNewClass(param)
          } else {
            // 编辑
            param = {
              id: this.form.classId,
              newKindName: this.form.className
            }
            this.updateClass(param)
          }
        } else {

        }
      })
    },
    async addNewClass(param) {
      // let result = await this.$api.(param);
      // if (result.code === 200) {
      //   this.$message({message: result.message, center: true, type: "success"})
      //   this.submitDisable = false;
      //   this.cancel('form');
      //   this.$emit("refresh",true);
      // } else {
      //   this.$message({message: result.message, center: true, type: "error"})
      //   this.submitDisable = false;
      // }
    },
    async updateClass(param) {
      // let result = await this.$api.(param);
      // if (result.code === 200) {
      //   this.$message({message: result.message, center: true, type: "success"})
      //   this.submitDisable = false;
      //   this.cancel('form');
      //   this.$emit("refresh",true);
      // } else {
      //   this.$message({message: result.message, center: true, type: "error"})
      //   this.submitDisable = false;
      // }
    },
    cancel(formName) {
      this.hideData();
    },
    //关闭当前弹窗
    hideData() {
      this.$emit("hideThisDialog");
    },
  },
  watch: {
    dialogVisible(val) {
      console.log(val);
      this.showDialog = val;
      if (val) {
        this.getCity();
        console.log(`要编辑的内容是${JSON.stringify(this.editDetail)}`)
        if (this.editDetail.hasOwnProperty('id')) {
          this.dialogTitle = "编辑分类"
          // this.form.cityId = this.editDetail.cityCode;
          // this.form.classId = this.editDetail.id;
          // this.form.className = this.editDetail.newKindName;
          // this.form.classStatus = this.editDetail.state;
        } else {
          this.dialogTitle = "新增分类";
          // this.form.cityId = "";
          // this.form.classId = "";
          // this.form.className = "";
          // this.form.classStatus = "";
        }
      }
    }
  }
}
</script>

<style scoped>

</style>